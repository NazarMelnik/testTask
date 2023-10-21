import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import ProductPrices from "./components/ProductPrices/ProductPrices";

function App() {
  const [product, setProduct] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const handleItemClick = (id) => {
    setCurrentId(id);
  };

  useEffect(() => {
    fetch("/fakeFetch.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <ProductList product={product} onClick={handleItemClick} />
      <ProductPrices product={product} id={currentId} />
    </>
  );
}

export default App;
