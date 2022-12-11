import React from "react";

export default function FounderCard(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.url})`, backgroundPosition: "center",}}
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
        <p>{props.title}</p>
      </div>
    </div>
  );
}
