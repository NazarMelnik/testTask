import { useEffect, useState } from "react";

export default function ProductPrices({ product, id }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (product) {
      const pricesObject = product.reduce((accumulator, item) => {
        const itemId = item.id;
        if (!accumulator[itemId]) {
          accumulator[itemId] = [];
        }
        accumulator[itemId].push(item.price);
        return accumulator;
      }, {});
      setPrices(pricesObject);
    }
  }, [product]);

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
