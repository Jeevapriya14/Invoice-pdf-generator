import { Request, RequestHandler, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const registerUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
     res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new user
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

   res.status(201).json({ message: 'User registered successfully', token });
};

