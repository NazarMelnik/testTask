import { useEffect, useState } from "react";

export default function ProductPrices(props) {
  const { product, id } = props;
  const [prices, setPrices] = useState({});
  // проходимось по кожному елементу після отримання данних з запиту, потім створюємо пари ід : [масив цін], якщо елемент з таким id існує то ми просто додаємо ще одну ціну , а якщо такого id ще немає у нашому об'єкті то створюється ключ з данним id
  useEffect(() => {
    if (product) {
      product.forEach((item) => {
        setPrices((prevPrices) => {
          const newPrices = { ...prevPrices };
          if (!newPrices[item.id]) {
            newPrices[item.id] = [item.price];
          } else {
            newPrices[item.id].push(item.price);
          }
          return newPrices;
        });
      });
    }
  }, [product]);
  // і або показуємо наш масив якщо ми вже знаємо id яке нам треба, або взагалі нічого не показуємо
  if (prices[id]) {
    return (
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "15px",
          flexWrap: "wrap",
        }}>
        {prices[id].map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
