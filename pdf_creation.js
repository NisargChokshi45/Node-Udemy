const fs = require('fs');
const pdf = require('pdfkit');

const myPdf = new pdf;

myPdf.pipe(fs.createWriteStream('test.pdf'));

myPdf.font('Times-Roman').fontSize(44).text('Sample PDF generated using Node Modules', 100, 100);

myPdf.end();