const { spawn } = require('child_process');

// Replace 'your-latex-file.tex' with the path to your LaTeX file
const latexFile = 'res.tex';

const convertToPdf = (latexFile) => {
  const pdflatex = spawn('pdflatex', [latexFile]);

  pdflatex.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pdflatex.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pdflatex.on('close', (code) => {
    console.log(`pdflatex process exited with code ${code}`);
  });
};

convertToPdf(latexFile);
