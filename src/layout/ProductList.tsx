import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  title: string;
  image: string;
  dateUploaded: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Sample API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const productsWithDate = data.map((product: any) => ({
          ...product,
          dateUploaded: new Date().toISOString(), // Set current date for simplicity
        }));
        setProducts(productsWithDate);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;