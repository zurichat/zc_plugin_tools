import React from "react";
import { useParams } from "react-router";
import FigmaAbout from "../pages/FigmaAbout";
import FigmaMessages from "../pages/FigmaMessages";
import FigmaDownload from "../pages/FigmaDownload";

const FigmaComponentsContainer = () => {
  const { component } = useParams();

  console.log(component);

  return (
    <>
      {component === "about" && <FigmaAbout />}
      {component === "messages" && <FigmaMessages />}
      {component === "download" && <FigmaDownload />}
    </>
  );
};

export default FigmaComponentsContainer;
