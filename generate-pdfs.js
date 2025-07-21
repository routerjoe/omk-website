const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// List of all pages to generate PDFs for
const pages = [
  { name: 'Home', url: 'http://localhost:3000' },
  { name: 'About Us', url: 'http://localhost:3000/about' },
  { name: 'Programs', url: 'http://localhost:3000/programs' },
  { name: 'Public Documents', url: 'http://localhost:3000/public-documents' },
  { name: 'Get Involved', url: 'http://localhost:3000/get-involved' },
  { name: 'Apply', url: 'http://localhost:3000/apply' },
  { name: 'Donate', url: 'http://localhost:3000/donate' },
  { name: 'Contact', url: 'http://localhost:3000/contact' },
  // Individual program pages
  { name: 'Program - Workforce Development & Tech Training', url: 'http://localhost:3000/programs/workforce-development-tech-training' },
  { name: 'Program - Veteran Empowerment & Transition Support', url: 'http://localhost:3000/programs/veteran-empowerment-transition-support' },
  { name: 'Program - Educational & Cultural Advancement', url: 'http://localhost:3000/programs/educational-cultural-advancement' },
  { name: 'Program - Financial Literacy & Economic Mobility', url: 'http://localhost:3000/programs/financial-literacy-economic-mobility' },
  { name: 'Program - Community Reinvestment & Technology Equity', url: 'http://localhost:3000/programs/community-reinvestment-technology-equity' },
  { name: 'Program - Scholarships, Grants & Direct Aid', url: 'http://localhost:3000/programs/scholarships-grants-direct-aid' }
];

async function generatePDFs() {
  // Create pdfs directory if it doesn't exist
  const pdfDir = path.join(__dirname, 'pdfs');
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log('Starting PDF generation...');

  for (const page of pages) {
    try {
      console.log(`Generating PDF for: ${page.name}`);
      
      const browserPage = await browser.newPage();
      
      // Set viewport for consistent rendering
      await browserPage.setViewport({ width: 1200, height: 800 });
      
      // Navigate to the page
      await browserPage.goto(page.url, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // Wait a bit more for any dynamic content to load
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate PDF
      const fileName = `${page.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      const filePath = path.join(pdfDir, fileName);
      
      await browserPage.pdf({
        path: filePath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        }
      });

      console.log(`✓ Generated: ${fileName}`);
      await browserPage.close();
      
    } catch (error) {
      console.error(`✗ Error generating PDF for ${page.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\nPDF generation complete! Check the ./pdfs directory for all generated files.');
}

// Run the script
generatePDFs().catch(console.error);