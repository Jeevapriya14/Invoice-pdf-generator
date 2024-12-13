// src/components/ProductList.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  rate: number;
  total: number;
  gst: number;
}

interface ProductListProps {
  products: Product[];
  onRemove: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemove }) => {
  return (
    <div className="product-list-container">
      <h3>Product List</h3>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Total</th>
            <th>GST (18%)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.rate}</td>
              <td>{product.total}</td>
              <td>{product.gst}</td>
              <td>
                <button onClick={() => onRemove(product.id)} className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
