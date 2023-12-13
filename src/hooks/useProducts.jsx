/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc, query, where, getDocs, getFirestore, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useAllProducts = (searchTerm = "") => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, "products");

      // Construir la consulta
      let baseQuery = query(collectionRef);

      // Agregar filtro por término de búsqueda si está presente y es una cadena
      if (searchTerm && typeof searchTerm === 'string') {
        baseQuery = query(collectionRef, where("title", ">=", searchTerm.toLowerCase()));
      }

      try {
        const res = await getDocs(baseQuery);
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { products, loading, error };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const docRef = doc(db, "products", id);

      try {
        const res = await getDoc(docRef);
        setProduct({ id: res.id, ...res.data() });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { product, loading, error };
};

export const useAllProductsByFilter = (collectionName, categoryId, fieldToFilter) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, collectionName);

      const categoryQuery = query(collectionRef, where(fieldToFilter, "==", categoryId));

      try {
        const res = await getDocs(categoryQuery);
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return { products, loading, error };
};
