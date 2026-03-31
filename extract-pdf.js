const { PDFParse } = require('pdf-parse');
const fs = require('fs');

const filePath = 'Phone covers printable (1).pdf';
const buffer = fs.readFileSync(filePath);

const parser = new PDFParse({ data: buffer });
parser.getText().then(data => {
  console.log('=== PDF TEXT CONTENT ===');
  console.log(data.text || '(no text extracted)');
  console.log('\n=== PAGES ===', data.pages || data.numpages);
}).catch(err => {
  console.error('Error:', err.message);
});
