import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import PdfPreview from './components/PdfPreview';
import Login from './components/Login';  // Ensure this component exists
import './styles/global.css';
import logo from './images/logo.png';

const App: React.FC = () => {
  const navigate = useNavigate();

  interface Product {
    name: string;
    quantity: number;
    rate: number;
    total: number;
    gst: number;
  }

  const products: Product[] = [
    { name: "Product 1", quantity: 2, rate: 100, total: 200, gst: 0.18 },
    { name: "Product 2", quantity: 1, rate: 150, total: 150, gst: 0.18 },
  ];

  const totalAmount = products.reduce((total, product) => total + product.total, 0);
  const gstAmount = totalAmount * 0.18; // Assuming 18% GST
  const grandTotal = totalAmount + gstAmount;

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-black  text-white p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <img
            src={logo}
            alt="Levitation Logo"
            className="h-[48px] ml-11"
          />
          <button
            onClick={handleLoginClick}
            className="bg-lime-300 text-black px-4 py-2 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Register />} />  {/* Default route */}
        <Route path="/register" element={<Register />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route
          path="/preview-pdf"
          element={
            <PdfPreview
              products={products}
              totalAmount={totalAmount}
              gstAmount={gstAmount}
              grandTotal={grandTotal}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
