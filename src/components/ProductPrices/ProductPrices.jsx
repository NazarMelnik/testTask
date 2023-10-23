import { useEffect, useState } from "react";
import _ from "lodash";
export default function ProductPrices(props) {
  const { product, id } = props;
  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (product) {
      const groupedPrices = _.groupBy(product, "id");
      const pricesObject = {};
      Object.keys(groupedPrices).forEach((key) => {
        pricesObject[key] = groupedPrices[key].map((item) => item.price);
      });
      setPrices(pricesObject);
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
