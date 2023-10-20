export default function ProductList(props) {
  const { product, onClick } = props;
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
        }}>
        {product.map((el, id) => (
          <li key={id} onClick={() => onClick(el.id)}>
            {el.id}:{el.price}
          </li>
        ))}
      </ul>
    </>
  );
}
