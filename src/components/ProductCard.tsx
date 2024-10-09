import React from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  dateUploaded: string; // Assuming the date is in ISO format
}

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void; // Function to handle deletion
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        margin: '10px',
        width: '200px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      }}
      className="product-card"
    >
      <img 
        src={product.image} 
        alt={product.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>{product.title}</h3>
      <p>{new Date(product.dateUploaded).toLocaleDateString()}</p>
      <button 
        onClick={() => onDelete(product.id)} 
        style={{
          marginTop: '10px',
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;