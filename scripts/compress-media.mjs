import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const TEMP_DIR = path.join(process.cwd(), 'public_compressed_temp');

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

console.log('Starting media compression...');
console.log('FFmpeg binary:', ffmpegPath);

const files = fs.readdirSync(PUBLIC_DIR);

const videoExtensions = ['.mp4', '.mov'];
const imageExtensions = ['.jpg', '.jpeg', '.png'];

const videoFiles = files.filter(f => videoExtensions.includes(path.extname(f).toLowerCase()));
const imageFiles = files.filter(f => imageExtensions.includes(path.extname(f).toLowerCase()));

console.log(`Found ${videoFiles.length} video files and ${imageFiles.length} image files.`);

// Map of old filename -> new filename if extension changes (e.g. .mov -> .mp4)
const filenameMap = {};

// 1. Compress Images
for (const file of imageFiles) {
  const inputPath = path.join(PUBLIC_DIR, file);
  const tempPath = path.join(TEMP_DIR, file);
  const ext = path.extname(file).toLowerCase();
  
  const initialSize = fs.statSync(inputPath).size;
  console.log(`\nProcessing image: ${file} (${(initialSize / 1024).toFixed(1)} KB)`);

  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath).jpeg({ quality: 82, mozjpeg: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await sharp(inputPath).png({ quality: 82, compressionLevel: 8 }).toFile(tempPath);
    }
    const newSize = fs.statSync(tempPath).size;
    console.log(`Compressed image ${file}: ${(initialSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${((1 - newSize / initialSize) * 100).toFixed(1)}% reduction)`);
    fs.copyFileSync(tempPath, inputPath);
    fs.unlinkSync(tempPath);
  } catch (err) {
    console.error(`Error compressing image ${file}:`, err.message);
  }
}

// 2. Compress Videos
for (let i = 0; i < videoFiles.length; i++) {
  const file = videoFiles[i];
  const inputPath = path.join(PUBLIC_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  
  // Convert .mov to .mp4 for better web streaming & smaller size
  const newFileName = `${baseName}.mp4`;
  const outputPath = path.join(PUBLIC_DIR, newFileName);
  const tempOutputPath = path.join(TEMP_DIR, newFileName);

  if (file !== newFileName) {
    filenameMap[file] = newFileName;
  }

  const initialSize = fs.statSync(inputPath).size;
  console.log(`\n[${i + 1}/${videoFiles.length}] Processing video: ${file} (${(initialSize / (1024 * 1024)).toFixed(1)} MB)`);

  try {
    // FFmpeg options:
    // -vf "scale='min(1080,iw)':-2" -> scale height/width to max 1080p maintaining aspect ratio
    // -c:v libx264 -crf 23 -preset medium -> visually lossless H.264 encoding
    // -c:a aac -b:a 128k -> high quality AAC audio
    // -movflags +faststart -> enables immediate web video streaming
    const cmd = `"${ffmpegPath}" -y -i "${inputPath}" -vf "scale='min(1080,iw)':-2" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart "${tempOutputPath}"`;
    
    execSync(cmd, { stdio: 'inherit' });

    const newSize = fs.statSync(tempOutputPath).size;
    console.log(`Successfully compressed ${file}: ${(initialSize / (1024 * 1024)).toFixed(1)} MB -> ${(newSize / (1024 * 1024)).toFixed(1)} MB (${((1 - newSize / initialSize) * 100).toFixed(1)}% reduction)`);

    // Replace original file with compressed mp4
    if (file !== newFileName && fs.existsSync(inputPath)) {
      fs.unlinkSync(inputPath);
    }
    fs.copyFileSync(tempOutputPath, outputPath);
    fs.unlinkSync(tempOutputPath);
  } catch (err) {
    console.error(`Error compressing video ${file}:`, err.message);
  }
}

// Cleanup temp dir
if (fs.existsSync(TEMP_DIR)) {
  fs.rmdirSync(TEMP_DIR, { recursive: true });
}

console.log('\n=============================================');
console.log('ALL MEDIA COMPRESSION COMPLETED SUCCESSFULLY!');
console.log('Filename mapping:', JSON.stringify(filenameMap, null, 2));
console.log('=============================================');
