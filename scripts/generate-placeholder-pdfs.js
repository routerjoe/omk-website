const fs = require('fs');
const path = require('path');

// Simple PDF header (minimal PDF structure)
const createPlaceholderPDF = (title, content) => {
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 24 Tf
50 700 Td
(${title}) Tj
0 -50 Td
/F1 12 Tf
(${content}) Tj
0 -30 Td
(This is a placeholder document.) Tj
0 -20 Td
(Please replace with the actual document.) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000125 00000 n 
0000000348 00000 n 
0000000565 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
640
%%EOF`;
  
  return pdfContent;
};

const documents = [
  {
    filename: 'bylaws.pdf',
    title: 'Ohana Mana Koa Bylaws',
    content: 'Organizational bylaws and governance structure.'
  },
  {
    filename: 'conflict-of-interest.pdf',
    title: 'Conflict of Interest Policy',
    content: 'Procedures for managing potential conflicts of interest.'
  },
  {
    filename: 'narrative-description.pdf',
    title: 'Narrative Description of Activities',
    content: 'Detailed narrative of organizational activities.'
  },
  {
    filename: 'budget-projection.pdf',
    title: 'Budget Projection',
    content: 'Three-year budget projection and financial planning.'
  }
];

const documentsDir = path.join(__dirname, 'public', 'documents');

// Ensure documents directory exists
if (!fs.existsSync(documentsDir)) {
  fs.mkdirSync(documentsDir, { recursive: true });
}

// Generate placeholder PDFs
documents.forEach(doc => {
  const pdfContent = createPlaceholderPDF(doc.title, doc.content);
  const filePath = path.join(documentsDir, doc.filename);
  
  fs.writeFileSync(filePath, pdfContent);
  console.log(`Created placeholder PDF: ${doc.filename}`);
});

console.log('All placeholder PDFs created successfully!');