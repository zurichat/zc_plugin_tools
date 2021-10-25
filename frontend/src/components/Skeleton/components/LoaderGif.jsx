import React from "react";
import Loader from "../assets/loaderOne.gif";
const LoaderGif = () => {
  return (
    <div
      style={{ display: "grid", placeItems: "center", marginBottom: "2rem" }}
    >
      <figure style={{ width: "15rem", height: "3.5rem" }}>
        <img
          src={Loader}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            display: "block",
          }}
          alt=""
        />
      </figure>
    </div>
  );
};

export default LoaderGif;
