import { useState } from "react";

export default function ProductPrices(props) {
  const { product, id } = props;

  // Створюємо стан для зберігання видимості для кожного ID
  const [visibleIDs, setVisibleIDs] = useState({});

  // Функція для зміни видимості для певного ID
  const toggleVisibility = (id) => {
    setVisibleIDs((prevVisibleIDs) => ({
      [id]: !prevVisibleIDs[id],
    }));
  };

  // Генеруємо `li` елементи для всіх можливих ID
  const listItems = product.map((product) => (
    <li
      key={product.id}
      style={{ display: visibleIDs[product.id] ? "block" : "none" }}>
      <p>
        ID {product.id} - {product.price}
      </p>
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <button onClick={() => toggleVisibility(id)}>
        Показати товари з ID {id}
      </button>
    </>
  );
}
