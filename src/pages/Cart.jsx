import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h4>{item.title}</h4>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          {item.qty}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}