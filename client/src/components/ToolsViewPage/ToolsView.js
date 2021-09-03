<<<<<<< HEAD
import React from "react";
import ToolsHero from "../MainPage/ToolsHero1";
import InstallTools from "../MainPage/Instaledtoolssection";
import InstalledAppSearch from "../AppSearch/InstalledAppSearch";
=======
import React, {useState} from "react";
import HeroSection from "../HeroSection/HeroSection";
>>>>>>> 3f6e3d94f253d1dc2c3cf39eb6d19be3669ae788
const ToolsView = () => {
  const [showHero, setShowHero] = useState(true)

  return (
    <div style={{padding: "12px 2rem"}}>
      {/* insert your component for those working on the company tools view page */}
<<<<<<< HEAD
      <ToolsHero />
      <InstalledAppSearch />
      <InstallTools />
=======
     {showHero &&  <HeroSection showHeroSection={() => setShowHero(!showHero)} />}
>>>>>>> 3f6e3d94f253d1dc2c3cf39eb6d19be3669ae788
    </div>
  );
};

export default ToolsView;
