import { Request, Response } from 'express';
import Product from '../models/Product';

export const addProduct = async (req: Request, res: Response) => {
  const { name, quantity, rate, total, gst } = req.body;

  const product = new Product({ name, quantity, rate, total, gst });
  await product.save();

  res.status(201).json({ message: 'Product added successfully', product });
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json(products);
};
