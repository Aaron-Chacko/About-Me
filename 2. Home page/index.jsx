import React from "react";
import aot21 from "./aot2-1.png";
import cp1 from "./cp-1.png";
import football1 from "./football-1.png";
import image from "./image.svg";
import kira1 from "./kira-1.png";
import kirito1 from "./kirito-1.png";
import messi21 from "./messi2-1.png";
import space1 from "./space-1.png";
import "./style.css";
import vector1 from "./vector-1.svg";
import vector from "./vector.svg";

export const IphoneSe = () => {
  return (
    <div className="iphone-SE">
      <div className="div">
        <div className="overlap-group">
          <img className="vector" alt="Vector" src={vector} />

          <img className="img" alt="Vector" src={image} />

          <img className="vector-2" alt="Vector" src={vector1} />
        </div>

        <div className="text-wrapper">AQUILAGUS</div>

        <img className="aot" alt="Aot" src={aot21} />

        <img className="cp" alt="Cp" src={cp1} />

        <img className="kirito" alt="Kirito" src={kirito1} />

        <img className="kira" alt="Kira" src={kira1} />

        <img className="space" alt="Space" src={space1} />

        <img className="football" alt="Football" src={football1} />

        <img className="messi" alt="Messi" src={messi21} />
      </div>
    </div>
  );
};
