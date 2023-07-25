# Use an official TeX Live image as the base image
FROM danteev/texlive

# Copy the LaTeX file to the container
COPY res.tex /usr/src/app/

# Set the working directory
WORKDIR /usr/src/app

# Compile the LaTeX file to PDF using pdflatex
RUN pdflatex -interaction=nonstopmode res.tex
