import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import InstallToolsCard from "./installedcard";
import { tools } from "../../data/tools.data";

const InstalledTools = () => {
  return (
    <div className="flex flex-col">
      <div className="flex px-4 mb-3">
        <div className="flex-1 font-bold ">Installed Tools</div>
        <div className="flex space-x-2">
          <div>
            <FontAwesomeIcon icon={faSlidersH} className="" />
          </div>
          <div>Filter</div>
        </div>
      </div>
      <div className="mx-4 grid grid-cols-4 gap-2 ">
        {tools &&
          tools
            .filter((tol) => tol.installed === true)
            .map(({ name, image, description }) => {
              return (
                <InstallToolsCard
                  name={name}
                  image={image}
                  description={description}
                />
              );
            })}
      </div>
    </div>
  );
};

export default InstalledTools;
