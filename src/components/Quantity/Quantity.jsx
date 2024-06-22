import { useContext } from "react";
import styles from "./Quantity.module.css"
import AuthContext from "../../contexts/authContext";
function Quantity({cartItem}) {
  const { changeQuantity} = useContext(AuthContext);
  return (
    <input
      className={styles.quantity}
      type="number"
      min="1"
      max="999"
      value={cartItem.quantity}
      onChange={(e) => changeQuantity(cartItem, e.target.value)}
    />
  );
}

export default Quantity