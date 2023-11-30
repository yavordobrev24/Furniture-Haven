import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCart.css";
import AuthContext from "../../contexts/authContext";

export default function ShoppingCart() {
  const { cart, handleCheckout, handleRemoveItem } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasCartItems, setHasCartItems] = useState(false);
  useEffect(() => {
    if (cart?.cartItems.length > 0) {
      setCartItems(cart.cartItems);
      setHasCartItems(true);
    } else {
      setCartItems([]);
      setHasCartItems(false);
    }
  }, [cart]);

  const calculateTotal = () => {
    return cart?.cartItems.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };
  /*
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };*/
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems?.length > 0
          ? cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-info">
                  <div className="top-info">
                    <img src={item.imageUrl} alt={item.name} />
                    <p className="item-name">{item.name}</p>
                    <button
                      onClick={() => handleRemoveItem(cart._id, cart, item._id)}
                      className="remove-button"
                    >
                      <span className="remove-icon">X</span>
                    </button>
                  </div>
                  <p className="item-price">${item.price}</p>
                </div>
              </div>
            ))
          : "No items in your shopping cart"}
      </div>
      <div className="cart-total">
        <p>Total: ${hasCartItems ? calculateTotal().toFixed(2) : 0}</p>
      </div>
      {hasCartItems ? (
        <button
          className="checkout-button"
          onClick={() => {
            setShowModal(true);
            handleCheckout(cart._id, cart);
          }}
        >
          Checkout
        </button>
      ) : null}

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
