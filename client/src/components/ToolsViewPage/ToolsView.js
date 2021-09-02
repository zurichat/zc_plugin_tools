import React from "react";
import ToolsHero from "../MainPage/ToolsHero1";
import InstallTools from "../MainPage/Instaledtoolssection";
import InstalledAppSearch from "../AppSearch/InstalledAppSearch";
const ToolsView = () => {
  return (
    <div>
      {/* insert your component for those working on the company tools view page */}
      <ToolsHero />
      <InstalledAppSearch />
      <InstallTools />
    </div>
  );
};

export default ToolsView;
