import { useContext, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      <div className={styles["cart-items"]}>
        {cartItems?.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className={styles["cart-item"]}>
              <img src={item.imageUrl} alt={item.name} />
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>${item.price}</p>
              <button
                onClick={() => handleRemoveItem(cart._id, cart, item._id)}
                className={styles["remove-btn"]}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className={styles.no}>There are no any items in your cart.</p>
        )}
      </div>
      <div className={styles.total}>
        <p>
          Total: <span>${hasCartItems ? calculateTotal().toFixed(2) : 0}</span>
        </p>
      </div>
      {hasCartItems ? (
        <button
          className={styles.checkout}
          onClick={() => {
            setShowModal(true);
            handleCheckout(cart._id, cart);
          }}
        >
          Checkout
        </button>
      ) : null}

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <p>Thank you for your purchase!</p>
            <button onClick={closeModal} className={styles.close}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
