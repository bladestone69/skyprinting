const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const filePath = 'Phone covers printable (1).pdf';
const buffer = fs.readFileSync(filePath);
const outDir = 'public/images/covers';
fs.mkdirSync(outDir, { recursive: true });

async function extractImages() {
  const parser = new PDFParse({ data: buffer });
  
  console.log('Extracting images from PDF...');
  
  try {
    const result = await parser.getImage();
    
    console.log('Pages with images:', result.pages.length);
    
    let totalImages = 0;
    for (const page of result.pages) {
      console.log(`Page ${page.pageNumber}: ${page.images.length} images`);
      for (const img of page.images) {
        totalImages++;
        const ext = img.dataUrl.startsWith('data:image/png') ? 'png' : 'jpg';
        const filename = `cover-p${page.pageNumber}-i${totalImages}.${ext}`;
        const filepath = path.join(outDir, filename);
        
        // Save as file
        const base64Data = img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
        console.log(`  Saved: ${filename} (${img.width}x${img.height})`);
      }
    }
    
    console.log(`\nTotal: ${totalImages} images extracted to ${outDir}`);
    
    // Also save a page screenshot
    console.log('\nExtracting page screenshots...');
    const screenshot = await parser.getScreenshot({ scale: 2 });
    for (const page of screenshot.pages) {
      const filename = `page-${page.pageNumber}.png`;
      const filepath = path.join(outDir, filename);
      const base64Data = page.dataUrl.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
      console.log(`  Saved: ${filename} (${page.width}x${page.height})`);
    }
    
  } catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);
  }
}

extractImages();
