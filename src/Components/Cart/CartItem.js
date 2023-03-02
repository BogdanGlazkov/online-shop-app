import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{cartItem.name}</p>
      <p>Item(s): {cartItem.quantity}</p>
      <p>
        ${cartItem.totalPrice}
        <span
          onClick={() =>
            dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
          }
        >
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
            alt="delete"
          />
        </span>
      </p>
    </div>
  );
};

export default CartItem;
