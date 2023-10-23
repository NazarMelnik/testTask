import { useEffect, useState } from "react";
import _ from "lodash";
export default function ProductPrices({ product, id }) {
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
      <ul className="choosen-id-list">
        {prices[id].map((price, index) => (
          <li className="choosen-id-item" key={index}>
            {price}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
