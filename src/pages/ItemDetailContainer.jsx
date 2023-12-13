import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading, error } = useSingleProduct(productId);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar el producto.</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", marginTop: "50px", marginLeft: "50px" }}>
      <Card style={{ width: "20rem", padding: "10px" }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <ItemQuantitySelector />
        </Card.Body>
      </Card>
    </div>
  );
};

