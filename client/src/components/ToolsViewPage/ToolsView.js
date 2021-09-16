import React, { useState, useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";
import InstalledTools from "../MainPage/Instaledtoolssection";
import SearchBar from "../SearchBar";
import TitleBox from "../fragments/TitleBox";
import RecommendTools from "../ToolsSection/RecommendTools";
import { tools } from "../../data/tools.data";


const ToolsView = () => {
  const [showHero, setShowHero] = useState(true);
  const [showRecoTool, setShowRecoTool] = useState(false)
  const [textpresent, setTextPresent] = useState('')
  const [installTools, setInstallTools] = useState([])
  const [recommendTools, setRecommendTools] = useState([])

  useEffect(() => {
    const getInstalledAndRecommendTools = async () => {
     const instTools = await getInstall() 
     const recoTools = await getRecommend()
   setInstallTools(instTools)
   console.log(recoTools);
  //  setRecommendTools(recoTools)
    }

    getInstalledAndRecommendTools()
  }, [])

  const getInstall = () => {
    return tools.filter((tool) => tool.installed === true)
}
  
  const getRecommend = async () => {
     const res = await fetch('https://externaltools.zuri.chat/api/tools')
     const data = await res.json()
     console.log(data);
    //  return tools.filter((tool) => tool.installed === false);

}

const setViewToolPage = async (text, reason) => {
    
  if(reason){
    const instList = await shuffleInstalledTools(text)
    const recoList = await shuffleRecommendTools(text)
    setInstallTools(instList)
    setRecommendTools(recoList)
    setShowRecoTool(true)
    setTextPresent(text)
  }
  else{
    const instList = await shuffleInstalledTools (text)
    const recoList = await shuffleRecommendTools(text)
    setInstallTools(instList)
    setRecommendTools(recoList)
    setShowRecoTool(false)
    setTextPresent(text)
  }
}

const shuffleInstalledTools = (text) => {
  return tools.filter((item) => item.installed  && item.name.toLowerCase().search(text.toLowerCase()) != -1)
 }

const shuffleRecommendTools = (text) => {
  return tools.filter((item) => item.installed === false && item.name.toLowerCase().search(text.toLowerCase()) != -1)
 }

 const showInstallOrNoInstall = (check) => {
  setNoInst(check)
}

const handleShowAvailableTools = () => {
  setShowRecoTool(true)
  setShowHero(false)
}

  return (
    <div style={{ padding: "12px 2rem"}}>
      {/* insert your component for those working on the company tools view page */}
      <TitleBox title="tools" text="tool directory" link={true} icon={true} />
      <div>
        {showHero && (
          <HeroSection
            showHeroSection={showHero}
            setShowHeroSec={() => setShowHero(!showHero)}
          />
        )}
      </div>
      <SearchBar
        showRecoSec={setViewToolPage}
        showNoInstall={showInstallOrNoInstall}
      />
      <TitleBox
        icon={true}
        title={`${
          textpresent.length > 0 ? "search result" : "installed tools"
        }`}
        text="filter"
        link={false}
      />
      <InstalledTools
        list={installTools}
        showAvailableTools={handleShowAvailableTools}
        text={textpresent}
      />
      {showRecoTool && (
        <RecommendTools list={recommendTools} text={textpresent} />
      )}
    </div>
  );
};

export default ToolsView;
