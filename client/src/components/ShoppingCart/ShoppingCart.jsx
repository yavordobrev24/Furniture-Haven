import React, { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sofa", price: 499, quantity: 1 },
    { id: 2, name: "Coffee Table", price: 199, quantity: 2 },
    { id: 3, name: "Bookshelf", price: 299, quantity: 1 },
  ]);
  const [showModal, setShowModal] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity > 0 ? newQuantity : "" };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    setShowModal(true);
    setCartItems([]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <div className="top-info">
                <p className="item-name">{item.name}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-button"
                >
                  <span className="remove-icon">X</span>
                </button>
              </div>
              <p className="item-price">${item.price}</p>
              <div className="item-interaction">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Thank you for your purchase!</p>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
