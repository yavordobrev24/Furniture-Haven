export default function Product(props) {
  return (
    <div className="product">
      <img src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">${props.price}</p>
      <button className="add-to-cart-button" data-id={props._id}>
        Add to Cart
      </button>
    </div>
  );
}
