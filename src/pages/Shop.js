import "../App.css";
import Cart from "../Components/Cart/Cart";
import Gadgets from "../Components/GadgetsComponents/Gadgets";
import AllCategories from "../Components/Filter/AllCategories";
import Particless from "../Components/Particles/Particless";

function Shop() {
  return (
    <div className="App">
      <Particless />
      <div className="block">
        <AllCategories />
        <br />
        <Cart />
      </div>

      <div className="block">
        <Gadgets />
      </div>
    </div>
  );
}

export default Shop;
