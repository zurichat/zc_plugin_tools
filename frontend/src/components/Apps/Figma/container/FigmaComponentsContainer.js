import React from "react";
import { useParams } from "react-router";
import FigmaAbout from "../about-secttion/FigmaAbout";
import FigmaMessages from "../messages-section/FigmaMessages";
import FigmaDownload from "../downloads-section/FigmaDownload";

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
