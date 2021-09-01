import React from "react";
import { tools } from "../../data/tools.data";

// const installed =
const AppsPage = () => {
  return (
    <div>
      {tools &&
        tools
          .filter((tol) => tol.installed === true)
          .map((tool) => {
            return (
              <div>
                <img src={tool.image} alt={tool.name} />
                <p>{tool.name}</p>
              </div>
            );
          })}
    </div>
  );
};

export default AppsPage;
