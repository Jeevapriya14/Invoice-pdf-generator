// src/components/AddProduct.tsx
import React, { useState } from 'react';
import ProductList from './ProductList';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productQty, setProductQty] = useState(1);
  const [productRate, setProductRate] = useState(0);
  const [products, setProducts] = useState<any[]>([]);

  const handleAddProduct = () => {
    const productTotal = productQty * productRate;
    const productGST = productTotal * 0.18;

    const newProduct = {
      id: Date.now(),  // Use a unique ID based on timestamp
      name: productName,
      quantity: productQty,
      rate: productRate,
      total: productTotal,
      gst: productGST,
    };

    setProducts([...products, newProduct]);

    // Clear form fields after adding the product
    setProductName('');
    setProductQty(1);
    setProductRate(0);
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={(e) => e.preventDefault()} className="product-form">
        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Quantity</label>
          <input
            type="number"
            value={productQty}
            onChange={(e) => setProductQty(Number(e.target.value))}
            required
          />
        </div>

        <div className="input-group">
          <label>Rate</label>
          <input
            type="number"
            value={productRate}
            onChange={(e) => setProductRate(Number(e.target.value))}
            required
          />
        </div>

        <button type="button" onClick={handleAddProduct} className="add-btn">
          Add Product
        </button>
      </form>

      <ProductList products={products} onRemove={handleRemoveProduct} />
    </div>
  );
};

export default AddProduct;
