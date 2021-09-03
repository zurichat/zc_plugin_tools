import React, {useState} from "react";
import HeroSection from "../HeroSection/HeroSection";
const ToolsView = () => {
  const [showHero, setShowHero] = useState(true)

  return (
    <div style={{padding: "12px 2rem"}}>
      {/* insert your component for those working on the company tools view page */}
     {showHero &&  <HeroSection showHeroSection={() => setShowHero(!showHero)} />}
    </div>
  );
};

export default ToolsView;
