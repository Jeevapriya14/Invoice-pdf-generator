import Invoice from '../models/invoiceModel';
import puppeteer from 'puppeteer';

export const createInvoice = async (req: any, res: any) => {
    try {
        const { userId, products } = req.body;

        // Calculate total for each product
        products.forEach((product: any) => {
            product.total = product.qty * product.rate;
            product.gstAmount = product.total * product.gst;
        });

        const newInvoice = new Invoice({ userId, products });
        await newInvoice.save();

        res.status(201).json({ success: true, invoice: newInvoice });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const generatePDF = async (req: any, res: any) => {
    const { products, userId } = req.body;
    
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Generate the HTML content from the products
        let htmlContent = `<h1>Invoice</h1><ul>`;
        products.forEach((product: any) => {
            htmlContent += `<li>${product.name} - ${product.qty} x ${product.rate} = ${product.total}</li>`;
        });
        htmlContent += `</ul>`;
        
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf();
        await browser.close();

        res.contentType("application/pdf");
        res.send(pdfBuffer);
    } catch (error) {
        res.status(500).json({ message: "Error generating PDF" });
    }
};
