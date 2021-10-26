import ToolsDirectoryPageTop from "./toolsDirectoryPageTop";
import SingleAppPageTop from "./singleAppPageTop";

function PageTop({ path }) {
  const routeComponents = {
    "/toolsdirectory": <ToolsDirectoryPageTop />,
    "/gmail": <SingleAppPageTop />,
    "/googledrive": <SingleAppPageTop />,
    "/github": <SingleAppPageTop />,
    "/figma": <SingleAppPageTop />,
    "/giphy": <SingleAppPageTop />,
  };

  return routeComponents[path] || "";
}

export default PageTop;
