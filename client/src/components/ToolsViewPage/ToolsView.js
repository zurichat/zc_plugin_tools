import React, { useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import InstalledTools from "../MainPage/Instaledtoolssection";
const ToolsView = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools view page */}
      <div>
        {showHero && (
          <HeroSection showHeroSection={() => setShowHero(!showHero)} />
        )}
      </div>
      <InstalledTools />
    </div>
  );
};

export default ToolsView;
