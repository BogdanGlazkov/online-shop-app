import { useState } from "react";
import "aos/dist/aos.css";
import { historyImages } from "../data/historyImages";
import ParticlesHistory from "../Components/Particles/ParticlesHistory";

const History = () => {
  const [foto, setFoto] = useState(0);
  const { image } = historyImages[foto];

  const previousFoto = () => {
    setFoto((foto) => {
      foto--;
      if (foto < 0) {
        return historyImages.length - 1;
      }
      return foto;
    });
  };

  const nextFoto = () => {
    setFoto((foto) => {
      foto++;
      if (foto > historyImages.length - 1) {
        foto = 0;
      }
      return foto;
    });
  };

  return (
    <div data-aos="zoom-in">
      <ParticlesHistory />

      <div>
        <h2 className="text">From phones to TVs, from laptops to tablets...</h2>
        <h3 className="text">From our ❤️ to yours</h3>
        <br />
        <h3 className="text">See our best gadgets in the gallery:</h3>

        <div className="box">
          <div className="containerSlides">
            <button className="btnNexAndPrevious" onClick={previousFoto}>
              {" "}
              Back{" "}
            </button>
            <img src={image} className="slide" alt="foto"></img>
            <button className="btnNexAndPrevious" onClick={nextFoto}>
              Next
            </button>
          </div>
        </div>
        <h4 className="text">
          {" "}
          "Today’s gadgets are made with respect to your privacy, your data and
          even your comfort. And some even broaden your ways to control
          reality." <br />- Steve Jobs
        </h4>
      </div>
    </div>
  );
};

export default History;
