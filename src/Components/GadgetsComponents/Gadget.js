import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import {
  addItemToCart,
  getCartItems,
  updateQuantity,
} from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Gadget = ({ gadget }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const cartItems = useSelector(getCartItems);
  console.log(cartItems);

  const gadgetInCart = cartItems.some((item) => item.id === gadget.id);

  const handleBuy = () => {
    if (!gadgetInCart) {
      dispatch(addItemToCart({ gadget, quantity }));
    } else {
      dispatch(updateQuantity({ gadget, quantity }));
    }
  };

  return (
    <div data-aos="fade-up">
      <br />
      <img
        className="imgSmallDevice"
        src={`./${gadget.img}.jpg`}
        alt="gadgetImage"
        width="400px"
      />
      <h3>{gadget.name}</h3>
      <p>${gadget.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <br />
      <button className="visibilityBtn" onClick={handleBuy}>
        Add to cart
      </button>
      <br />
    </div>
  );
};

export default Gadget;
