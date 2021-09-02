import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import InstallToolsCard from "./installedcard";
import { tools } from "../../data/tools.data";
import { useHistory } from "react-router-dom";

const InstalledTools = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/tools");
  };
  return (
    <div className="flex flex-col  mx-auto mb-4" style={{ maxWidth: "1250px" }}>
      <div className="flex px-4 mb-3">
        <div className="flex-1 font-bold ">Installed Tools</div>
        <div className="flex space-x-2">
          <div>
            <FontAwesomeIcon icon={faSlidersH} className="" />
          </div>
          <div>Filter</div>
        </div>
      </div>
      <div className="mx-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
        {tools &&
          tools
            .filter((tol) => tol.installed === true)
            .map(({ name, image, description, linkName }) => {
              return (
                <InstallToolsCard
                  name={name}
                  image={image}
                  description={description}
                  linkName={linkName}
                />
              );
            })}
        <div>
          <div className="flex cursor-pointer">
            <div
              className="bg-gray-300 flex w-2/3 lg:w-full p-4 justify-center items-center rounded-xl space-x-3 border-2 border-dashed "
              onClick={handleClick}
            >
              <div>
                <FontAwesomeIcon icon={faPlus} className="text-gray-400" />
              </div>
              <div className="">Add Tools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledTools;
