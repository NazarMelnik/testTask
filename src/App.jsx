import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import ProductPrices from "./components/ProductPrices/ProductPrices";
import Loader from "./components/Loader/Loader";

function App() {
  const [product, setProduct] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const handleItemClick = (id) => {
    setCurrentId(id);
  };

  useEffect(() => {
    const loader = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    setShowLoader(true);
    fetch("/fakeFetch.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        clearTimeout(loader);
        setShowLoader(false);
      });

    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      <Loader show={showLoader} />
      <ProductList product={product} onClick={handleItemClick} />
      <ProductPrices product={product} id={currentId} />
    </>
  );
}

export default App;
