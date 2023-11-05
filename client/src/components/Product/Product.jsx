import "./Product.css";
export default function Product(props) {
  const addToCart = (e) => {
    console.log(props._id);
  };
  return (
    <div className="product">
      <img src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <p className="price">${props.price}</p>
      <button className="add-to-cart-button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
