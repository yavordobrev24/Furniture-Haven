import { useContext, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import AuthContext from "../../contexts/authContext";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import { useNavigate, Link } from "react-router-dom";

export default function ShoppingCart() {
  const { emptyCart, isAuthenticated, removeFromCart, cart } =
    useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const calculateTotal = () => {
    return cart?.reduce((total, cartItem) => {
      return total + Number(cartItem.price * cartItem.quantity);
    }, 0);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      <div className={styles["cart-items"]}>
        {cart?.length > 0 ? (
          cart.map((cartItem) => (
            <div key={cartItem.id} className={styles["cart-item"]}>
              <img src={cartItem.image_url} alt={cartItem.name} />
              <h3 className={styles.name}>{cartItem.name}</h3>
              <p className={styles.price}>${cartItem.price}</p>
              <Quantity cartItem={cartItem} />
              <button
                onClick={() => removeFromCart(cartItem.id)}
                className={styles["remove-btn"]}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className={styles.no}>There are no items in your cart.</p>
        )}
      </div>
      <div className={styles.total}>
        <p>
          Total:{" "}
          <span>${cart?.length > 0 ? calculateTotal().toFixed(2) : 0}</span>
        </p>
      </div>
      {cart?.length > 0 ? (
        isAuthenticated ? (
          <button
            className={styles.checkout}
            onClick={() => {
              setShowModal(true);
              emptyCart();
            }}
          >
            Checkout
          </button>
        ) : (
          <Button>
            <Link to="/login">Authenticate to checkout</Link>
          </Button>
        )
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
