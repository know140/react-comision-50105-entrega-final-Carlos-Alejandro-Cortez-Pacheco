import React, { useState } from "react";
import { useAllProducts } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, loading, error } = useAllProducts(15);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '5px', borderRadius: '5px', width: '300px' }}
      />
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={filterProducts(products, searchTerm)} />
      )}
    </div>
  );
};

// Función para filtrar productos según el término de búsqueda
const filterProducts = (products, searchTerm) => {
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
