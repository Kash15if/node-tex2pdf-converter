
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


const { exec } = require('child_process');

// Replace 'your-latex-file.tex' with the path to your LaTeX file
const latexFile = 'res.tex';

// Execute pdflatex to convert the LaTeX file to PDF
const convertToPdf = (latexFile) => {
  exec(`pdflatex ${latexFile}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during conversion: ${error.message}`);
    } else {
      console.log('Conversion successful!');
    }
  });
};

console.log(latexFile);

convertToPdf(latexFile);







// // API endpoint to return the PDF file
// app.get('/get-pdf', (req, res) => {
//   try {
//     const pdfFile = './res.pdf'; // Replace with the name of your PDF file

//     // Check if the PDF file exists
//     if (fs.existsSync(pdfFile)) {
//       const pdfFileStream = fs.createReadStream(pdfFile);
//       res.setHeader('Content-Type', 'application/pdf');
//       res.setHeader('Content-Disposition', `attachment; filename="${path.basename(pdfFile)}"`);
//       pdfFileStream.pipe(res);
//     } else {
//       res.status(404).send('PDF file not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error retrieving PDF file');
//   }
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

