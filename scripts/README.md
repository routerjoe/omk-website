# Scripts Directory

This directory contains utility scripts for the OMK website project.

## Available Scripts

### `generate-placeholder-pdfs.js`
- **Purpose**: Generates placeholder PDF documents for the public documents page
- **Usage**: `node scripts/generate-placeholder-pdfs.js`
- **Output**: Creates PDF files in `public/documents/` directory
- **Files Created**:
  - `bylaws.pdf`
  - `conflict-of-interest.pdf`
  - `narrative-description.pdf`
  - `budget-projection.pdf`

### `generate-pdfs.js`
- **Purpose**: Original PDF generation script
- **Usage**: `node scripts/generate-pdfs.js`
- **Note**: Legacy script, use `generate-placeholder-pdfs.js` instead

## Notes

- These scripts are for development and setup purposes only
- The generated PDFs are placeholders and should be replaced with actual documents before production deployment
- Scripts use Node.js built-in modules and don't require additional dependencies