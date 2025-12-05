export default function ProductRow({ product, onDelete }) {
  const productName = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  const handleDeleteBtnClick = () => {
    onDelete(product);
  };

  return (
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
      <td><button onClick={handleDeleteBtnClick}>x</button></td>
    </tr>
  );
}