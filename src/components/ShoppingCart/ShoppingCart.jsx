import { useContext, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import AuthContext from "../../contexts/authContext";
import { deleteCart, getCartItems } from "../../services/cartService";

export default function ShoppingCart() {
  const { userId, onDeleteCart, onDeleteCartItem } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await getCartItems(userId);
      setCartItems(data);
    };
    fetchCartItems();
  }, [onDeleteCartItem]);
  const calculateTotal = () => {
    return cartItems?.reduce((total, ci) => {
      return total + Number(ci.products.price);
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
          cartItems.map((ci) => (
            <div key={ci.id} className={styles["cart-item"]}>
              <img src={ci.products.image_url} alt={ci.products.name} />
              <h3 className={styles.name}>{ci.products.name}</h3>
              <p className={styles.price}>${ci.products.price}</p>
              <button
                onClick={() => onDeleteCartItem(ci.id)}
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
          Total:{" "}
          <span>${cartItems.length > 0 ? calculateTotal().toFixed(2) : 0}</span>
        </p>
      </div>
      {cartItems.length > 0 ? (
        <button
          className={styles.checkout}
          onClick={() => {
            setShowModal(true);
            onDeleteCart(userId);
            setCartItems([]);
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
