import React from "react";
import Pooja from "../assets/pooja.png";

export default function FounderCard(props) {
  return (
    <div
      style={{ backgroundImage: `url(${Pooja})`, backgroundPosition: "center" }}
      className="founder-card"
    >
      <div className="founder-name">
        <p
          style={{
            color: "#ECB440",
            fontFamily: "Montserrat",
            marginBottom: "2%",
          }}
        >
          <strong>{props.name}</strong>
        </p>
        <p>FOUNDER</p>
      </div>
    </div>
  );
}
