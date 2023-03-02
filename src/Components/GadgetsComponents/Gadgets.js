import { useSelector } from "react-redux";
import dataGadgets from "../../data/dataGadgets";
import Gadget from "./Gadget";
import { getSelectedCategory } from "../../redux/gadgetSlice";

const Gadgets = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      {dataGadgets
        .filter((gadget) => {
          if (selectedCategory === "ALL") return true;
          return selectedCategory === gadget.category;
        })
        .map((gadget, index) => (
          <Gadget key={index} gadget={gadget} />
        ))}
    </div>
  );
};

export default Gadgets;
