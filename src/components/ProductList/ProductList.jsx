export default function ProductList(props) {
  const { product, onClick } = props;
  return (
    <>
      <ul className="product-list">
        {product.map((el, id) => (
          <li className="product-item" key={id} onClick={() => onClick(el.id)}>
            {el.id}:{el.price}
          </li>
        ))}
      </ul>
    </>
  );
}
