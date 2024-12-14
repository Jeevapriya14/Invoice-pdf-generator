import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.ts';  // Importing the named export
import productRoutes from './routes/productRoutes.ts';
import pdfRoutes from './routes/pdfRoutes.ts';

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/pdf', pdfRoutes);
app.post('/api/register', (req, res) => {
    res.json({ message: 'Registration successful' });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// // server.ts
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import authRoutes  from './routes/authRoutes';  // Importing the named export
// import productRoutes from './routes/productRoutes';
// import pdfRoutes from './routes/pdfRoutes';
// // Import the server.ts file
// require('./server');


// // Initialize environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/pdf', pdfRoutes);

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI as string)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));
// app.post('/api/register', (req, res) => { res.json({ message: 'Registration successful' }); });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
