// PdfPreview.tsx

// Define the Product type here
interface Product {
    name: string;
    quantity: number;
    rate: number;
    total: number;
    gst: number;
  }
  
  interface PdfPreviewProps {
    products: Product[];
    totalAmount: number;
    gstAmount: number;
    grandTotal: number;
  }
  
  const PdfPreview: React.FC<PdfPreviewProps> = ({ products, totalAmount, gstAmount, grandTotal }) => {
    return (
      <div>
        <h1>PDF Preview</h1>
        <div>
          <p>Total Amount: {totalAmount}</p>
          <p>GST Amount: {gstAmount}</p>
          <p>Grand Total: {grandTotal}</p>
        </div>
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <p>{product.name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Rate: {product.rate}</p>
              <p>Total: {product.total}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PdfPreview;
  