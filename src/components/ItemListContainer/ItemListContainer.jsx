import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // Centrar horizontalmente
        padding: "30px", // Ajustar el espacio alrededor del contenedor
      }}
    >
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem", margin: "20px", textAlign: "center" }}>
          <Link to={`/item/${product.id}`}>
            <Card.Img variant="top" src={product.thumbnail} />
          </Link>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
