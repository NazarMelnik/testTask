export default function ProductList({ product, onClick }) {
  return (
    <ul className="product-list">
      {product.map((el, id) => (
        <li className="product-item" key={id} onClick={() => onClick(el.id)}>
          {el.id}:{el.price}
        </li>
      ))}
    </ul>
  );
}
