import React from "react";
import rectangle1 from "./rectangle-1.png";
import "./style.css";
import vector from "./vector.svg";

export const IphoneSe = () => {
  return (
    <div className="iphone-SE">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <img className="rectangle" alt="Rectangle" src={rectangle1} />

            <div className="text-wrapper">Follow Through</div>
          </div>
        </div>

        <div className="overlap">
          <div className="text-wrapper-2">AQUILAGUS</div>

          <div className="text-wrapper-2">AQUILAGUS</div>
        </div>

        <div className="overlap-2">
          <div className="rectangle-2" />

          <div className="text-wrapper-3">Alias</div>
        </div>

        <div className="overlap-3">
          <div className="rectangle-2" />

          <div className="text-wrapper-3">Code</div>
        </div>

        <img className="vector" alt="Vector" src={vector} />
      </div>
    </div>
  );
};
