import express from 'express';
import { createInvoice, generatePDF } from '../controllers/invoiceController';

const router = express.Router();

router.post('/create', createInvoice);
router.post('/generate-pdf', generatePDF);

export default router;
