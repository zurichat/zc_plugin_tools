import React from "react";
import PageTop from "../pageTops/index";
import { useLocation } from "react-router-dom";
import PluginHeader from "./PluginHeader";

function BaseLayout({ children }) {
  const path = useLocation().pathname;

  return (
    <div>
      <PluginHeader path={path} />
      <PageTop path={path} />
      {children}
    </div>
  );
}

export default BaseLayout;
