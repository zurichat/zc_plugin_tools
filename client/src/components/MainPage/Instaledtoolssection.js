import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import InstallToolsCard from "./installedcard";
// import { tools } from "../../data/tools.data";
import LoaderGif from "../fragments/LoaderGif";
import { useHistory } from "react-router-dom";

const InstalledTools = ({list ,noInstallItem, showAvailableTools, text, loading, error, network, noSearch}) => {
  const history = useHistory();

  // const handleClick = () => {
  //   history.push("/tools");
  // };
  if(loading){
    return(
     <LoaderGif />
    )
  }
  if (error) {
    return <h2>Failed to load tools, client error!!!</h2>;
  }
  if (network) {
    return <h2>Failed to load tools,please check your network settings and reload page</h2>;
  }
  if (noInstallItem) {
    return <h2>No tools installed, please click on browse tools or tools directory to install a tool</h2>
  }

  return (
    <div className="flex flex-col mb-4">
      {/* <div className="flex mb-3">
        <div className="flex-1 font-bold ">Installed Tools</div>
        <div className="flex space-x-2">
          <div>
            <FontAwesomeIcon icon={faSlidersH} className="" />
          </div>
          <div>Filter</div>
        </div>
      </div> */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {
          // tools &&
          //   tools
          //     .filter((tol) => tol.installed === true)
          noSearch === false ? list.map(({ name, id, description, icon, url}) => {
                return (
                  <InstallToolsCard
                    key={id}
                    name={name}
                    image={icon}
                    description={description}
                    linkName={url}
                  />
                );
              })
            : `No result of  "${text}"  found for installed tools`
        }
        <div className="flex cursor-pointer">
          <div
            className="bg-gray-300 w-full flex p-4 justify-center items-center rounded-xl space-x-3 border-2 border-dashed "
            onClick={showAvailableTools}
          >
            <div>
              <FontAwesomeIcon icon={faPlus} className="text-gray-400" />
            </div>
            <div className="">Add Tools</div>
          </div>
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default InstalledTools;
