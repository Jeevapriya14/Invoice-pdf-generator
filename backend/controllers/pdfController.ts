import { Request, Response } from 'express';
import PDFDocument from 'pdfkit'; // No need for any changes if pdfkit types are fixed
import fs from 'fs';

export const generatePdf = (req: Request, res: Response) => {
  const doc: any = new PDFDocument();  // Use `any` if you face type issues
  const filePath = 'output/invoice.pdf';

  doc.pipe(fs.createWriteStream(filePath));

  // Add content to the PDF
  doc.fontSize(25).text('Invoice', { align: 'center' });
  doc.fontSize(12).text('Product list:', { align: 'left' });
  const products = req.body.products || [];
  products.forEach((product: any) => {
    doc.text(`Name: ${product.name}, Quantity: ${product.quantity}, Rate: ${product.rate}, Total: ${product.total}`);
  });

  doc.end();

  res.status(200).send({ message: 'PDF generated successfully', filePath });
};
