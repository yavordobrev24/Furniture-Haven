import "./ShoppingCart.css";
export default function ShoppingCart(props) {
  const cartItems = [
    { id: 1, name: "Sofa", price: 499, quantity: 1 },
    { id: 2, name: "Coffee Table", price: 199, quantity: 2 },
    { id: 3, name: "Bookshelf", price: 299, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-price">${item.price}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}
