import React, {useState, useEffect} from "react";
import ToolsMainPage from "../MainTools/ToolsMain";
import { tools } from "../../data/tools.data";
import TitleBox from "../fragments/TitleBox";
import EnterpriseTools from "../ToolsSection/EnterpriseTools";
import DailyTools from "../ToolsSection/DailyTools";
import BotTools from "../ToolsSection/BotTools";
import SearchFieldTools from "./SearchFieldTools";
import CategoriesSection from "../fragments/CategoriesSection";

const ToolsDirectory = () => {
  //  enterprise list and states
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [enterpriseLoading, setEnterpriseLoading] = useState(true);
  const [enterpriseError, setEnterpriseError] = useState(false);
  const [enterpriseNetwork, setEnterpriseNetwork] = useState(false);
  const [noEnterpriseFound, setNoEnterpriseFound] = useState(false);
  // daily tools list and states
  const [dailyList, setDailyList] = useState([])
  const [dailyLoading, setDailyLoading] = useState(true);
  const [dailyError, setDailyError] = useState(false);
  const [dailyNetwork, setDailyNetwork] = useState(false);
  const [noDailyFound, setNoDailyFound] = useState(false);
  // bot tools list and states
  const [botList, setBotList] = useState([])
  const [botLoading, setBotLoading] = useState(true);
  const [botError, setBotError] = useState(false);
  const [botNetwork, setBotNetwork] = useState(false);
  const [noBotFound, setNoBotFound] = useState(false);

  const [inputText, setInputText] = useState('')

  useEffect(() => {
    const getFetchList = async () => {
      const enterpriseFetch = await enterpriseFetchList();
      setEnterpriseList(enterpriseFetch);
      const dailyFetch = await dailyFetchList();
      setDailyList(dailyFetch)
      const botFetch = await botFetchList();
      setBotList(botFetch)
    };

    getFetchList();
  }, [])

  const enterpriseFetchList = async () => {
     const url = `https://externaltools.zuri.chat/api/tools`;
     const res = await fetch(url);
     const status = res.status;
     const data = await res.json();
     if (status >= 200 && status <= 299) {
       setEnterpriseLoading(false);
       setEnterpriseNetwork(false);
       setEnterpriseError(false);
       const list = data.data;
       return list;
     }
    //   else if (status >= 500) {
    //    setEnterpriseLoading(false);
    //    setEnterpriseNetwork(true);
    //    setEnterpriseError(false);
    //  } 
     else {
       setEnterpriseLoading(false);
       setEnterpriseError(true);
       setEnterpriseNetwork(false);
     }
     console.log(data);
  };
  // daily tool fetch
  const dailyFetchList = async () => {
     const url = `https://externaltools.zuri.chat/api/tools`;
     const res = await fetch(url);
     const status = res.status;
     const data = await res.json();
     if (status >= 200 && status <= 299) {
       setDailyLoading(false);
       setDailyNetwork(false);
       setDailyError(false);
       const list = data.data;
       return list;
     } 
    //  else if (status >= 500) {
    //    setDailyLoading(false);
    //    setDailyNetwork(true);
    //    setDailyError(false);
    //  } 
     else {
       setDailyLoading(false);
       setDailyError(true);
       setDailyNetwork(false);
     }
     console.log(data);
  }
  // bot fetch
  const botFetchList = async () => {
    const url = `https://externaltools.zuri.chat/api/tools`
     const res = await fetch(url);
     const status = res.status;
     const data = await res.json();
     if (status >= 200 && status <= 299) {
       setBotLoading(false);
       setBotNetwork(false);
       setBotError(false);
       const list = data.data;
       return list;
     } else if (status >= 500) {
       setBotLoading(false);
       setBotNetwork(true);
       setBotError(false);
     } else {
       setBotLoading(false);
       setBotError(true);
       setBotNetwork(false);
     }

     console.log(data);
  }
  // function filter seaarch on bot daily and ent tools
  const  upDateInputText = async (text) => {
      setInputText(text)
      const enterpriseList = shuffleEnterpriseList(text)
      setEnterpriseList(enterpriseList)
       const dailyList = shuffleDailyList(text)
      setDailyList(dailyList)
       const botList = shuffleBotList(text)
      setBotList(botList)
  }
  const shuffleEnterpriseList = (text) => {
    const list = enterpriseList.filter((item) => item.enterprise && item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1)
     if (list.length > 0) {
        setEnterpriseLoading(true);
        setTimeout(() => {
          setEnterpriseLoading(false);
          setNoEnterpriseFound(false);
          return list;
        }, 1500);
      } else {
        setEnterpriseLoading(true);
        setTimeout(() => {
          setEnterpriseLoading(false);
          setNoEnterpriseFound(true);
        }, 1500);
      }
  }
  // shuffle daily tols on search
   const shuffleDailyList = (text) => {
     const list = dailyList.filter(
       (item) =>
         item.daily &&
         item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
     );
      if (list.length > 0) {
        setDailyLoading(true);
        setTimeout(() => {
          setDailyLoading(false);
          setNoDailyFound(false);
          return list;
        }, 1500);
      } else {
        setDailyLoading(true);
        setTimeout(() => {
          setDailyLoading(false);
          setNoDailyFound(true);
        }, 1500);
      }
   };
  //  shuffle bot tools on search
    const shuffleBotList = (text) => {
      const list = botList.filter(
        (item) =>
          item.bot &&
          item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
      );
       if (list.length > 0) {
         setBotLoading(true);
         setTimeout(() => {
           setBotLoading(false);
           setNoBotFound(false);
         return list;
         }, 1500);
       } else {
         setBotLoading(true);
         setTimeout(() => {
           setBotLoading(false);
           setNoBotFound(true);
         }, 1500);
       }
    };
  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools directory page */}
      {/* <ToolsMainPage /> */}
      <SearchFieldTools sendInputText={upDateInputText} />
      <CategoriesSection />
      {/* enterprise tools */}
      <TitleBox title="enterprise-ready apps" link={false} icon={false} />
      <EnterpriseTools 
      list={enterpriseList}
       text={inputText}
        loading={enterpriseLoading}
        error={enterpriseError}
        network={enterpriseNetwork}
        noSearch={noEnterpriseFound} />
      {/* daily tools */}
      <TitleBox title="daily tools" link={false} icon={false} />
      <DailyTools 
      list={dailyList} 
      text={inputText}
        loading={dailyLoading}
        error={dailyError}
        network={dailyNetwork}
        noSearch={noDailyFound}
         />
      {/* bot tools */}
      <TitleBox title="brilliant bots" link={false} icon={false} />
      <BotTools
        list={botList}
        text={inputText}
        loading={botLoading}
        error={botError}
        network={botNetwork}
        noSearch={noBotFound}
      />
    </div>
  );
};

export default ToolsDirectory;
