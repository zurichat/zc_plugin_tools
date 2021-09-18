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
  // installed tools list and conditions
  const [installTools, setInstallTools] = useState([])
  const [installLoading, setInstallLoading] = useState(true);
  const [installError, setInstallError] = useState(false);
  const [installNetwork, setInstallNetwork] = useState(false);
  const [noInstallFound, setNoInstallFound] = useState(false)
  const [noInstallItemFetch, setNoInstallItemFetch] = useState(false)
  // all tools list and conditions
  const [recommendTools, setRecommendTools] = useState([])
  const [recoLoading, setRecoLoading] = useState(true)
  const [recoError, setRecoError] = useState(false)
  const [recoNetwork, setRecoNetwork] = useState(false)
  const [noRecommendFound, setNoRecommendFound] = useState(false);


  useEffect(() => {
    const getInstalledAndRecommendTools = async () => {
     const instTools = await getInstall() 
     const recoTools = await getRecommend()
   setInstallTools(instTools)
   setRecommendTools(recoTools)
    }

    getInstalledAndRecommendTools()
  }, [])

  const getInstall = async () => {
    const res = await fetch('https://externaltools.zuri.chat/api/tools/recommended')
     const status = res.status;
     const data = await res.json();
     if(status >= 200 && status <= 299){
     const list = data.data;
     if(list.length > 0){
       setInstallError(false);
       setInstallLoading(false);
       setInstallNetwork(false);
       setNoInstallItemFetch(false)
       return list;
     }
     else{
       setInstallError(false);
       setInstallLoading(false);
       setInstallNetwork(false);
       setNoInstallItemFetch(true);}
     }
     else if(status >= 500){
       setInstallError(false)
       setInstallLoading(false)
       setInstallNetwork(true)
     }
     else{
       setInstallNetwork(false)
       setInstallLoading(false)
       setInstallError(true)
     }
    // return tools.filter((tool) => tool.installed === true)
}
  
  const getRecommend = async () => {
     const res = await fetch('https://externaltools.zuri.chat/api/tools')
     const status = res.status
     const data = await res.json()
     if(status >= 200 && status <= 299){
     setRecoLoading(false);
     setRecoNetwork(false);
     setRecoError(false)
     const list = data.data;
     return list;
     }
     else if(status >= 500){
            setRecoLoading(false);
     setRecoNetwork(true);
     setRecoError(false)
     }
     else{
     setRecoLoading(false);
     setRecoError(true);
     setRecoNetwork(false);
     }
     
     console.log(data);
    //  return tools.filter((tool) => tool.installed === false);
}

// search filter function 
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

// search function for installed section
const shuffleInstalledTools = (text) => {
  const list = installTools.filter(
    (item) =>
      item.name.toLowerCase().search(text.toLowerCase()) != -1
  );
   if (list.length > 0) {
     setInstallLoading(true);
     setTimeout(() => {
       setInstallLoading(false);
       setNoInstallFound(false);
       
     }, 1000);
return list;
   } else {
     setInstallLoading(true);
     setTimeout(() => {
       setInstallLoading(false);
       setNoInstallFound(true);
     }, 1000);
return list;
   }
 }

const shuffleRecommendTools = (text) => {
 const list = recommendTools.filter(
    (item) =>
      item.name.toLowerCase().search(text.toLowerCase()) != -1
  );
   if (list.length > 0) {
     setRecoLoading(true);
     setTimeout(() => {
       setRecoLoading(false);
       setNoRecommendFound(false);
       
     }, 1000);
return list;
   } else {
     setRecoLoading(true);
     setTimeout(() => {
       setRecoLoading(false);
       setNoRecommendFound(true);
     }, 1000);
return list;
   }
 }

 const showInstallOrNoInstall = (check) => {
  setNoInst(check)
}

const handleShowAvailableTools = () => {
  setShowRecoTool(true)
  setShowHero(false)
}

  return (
    <div style={{ padding: "12px 2rem" }}>
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
        loading={installLoading}
        error={installError}
        network={installNetwork}
        noSearch={noInstallFound}
        noInstallItem={noInstallItemFetch}
      />
      {showRecoTool && (
        <RecommendTools 
        list={recommendTools} 
        text={textpresent}
        loading={recoLoading}
        error={recoError}
        network={recoNetwork}
        noSearch={noRecommendFound}
        />
      )}
    </div>
  );
};

export default ToolsView;
