import React from "react";
import SubRouteData from "../components/SubRouteData";
import { useParams } from "react-router-dom";

function SubRoute() {
  const { subroute } = useParams();
  return <div>{SubRouteData[subroute]}</div>;
}

export default SubRoute;
