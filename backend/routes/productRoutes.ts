import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/productController';

const router = Router();

router.post('/', addProduct);
router.get('/', getProducts);

export default router;
