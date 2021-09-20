import React, { useState, useEffect, useCallback } from "react";
// import ToolsMainPage from "../MainTools/ToolsMain";
import { tools } from "../../data/tools.data"
import ToolsMainPage from "../MainTools/ToolsMain";
import TitleBox from "../fragments/TitleBox";
import EnterpriseTools from "../ToolsSection/EnterpriseTools";
import DailyTools from "../ToolsSection/DailyTools";
import BotTools from "../ToolsSection/BotTools";
import Productivity from "../ToolsSection/Productivity Tools";
import OfficeTools from "../ToolsSection/OfficeTools";
import DesignTools from "../ToolsSection/DesignTools";
import OtherTools from "../ToolsSection/OthersTools";
import SearchFieldTools from "./SearchFieldTools";
import CategoriesSection from "../fragments/CategoriesSection";
import Container from '../sections/Container'

const ToolsDirectory = () => {
  const [allList, setAllList] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isNetwork, setIsNetwork] = useState(false);
  //  enterprise list and states
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [noEnterpriseFound, setNoEnterpriseFound] = useState(false);
  // daily tools list and states
  const [dailyList, setDailyList] = useState([])
  const [noDailyFound, setNoDailyFound] = useState(false);
  // bot tools list and states
  const [botList, setBotList] = useState([])
  const [noBotFound, setNoBotFound] = useState(false);

  const [inputText, setInputText] = useState('')
  const [allStaffPicks, setAllStaffPicks] = useState([]);
  const [allStaffPicksContainer, setAllStaffPicksContainer] = useState([]);

  const [productivityList, setProductivityList] = useState([])
  const [officeToolsList, setOfficeToolsList] = useState([])
  const [designList, setDesignList] = useState([])
  const [othersList, setOthersList] = useState([])


  useEffect(() => {
    const getFetchList = async () => {
      const productivityFetch = await productivityFetchList();
      setProductivityList(productivityFetch)
      const officeToolsFetch = await officeToolsFetchList();
      setOfficeToolsList(officeToolsFetch)
      const designFetch = await designFetchList();
      setDesignList(designFetch)
      const othersFetch = await othersFetchList();
      setOthersList(othersFetch)
      const allList = await fetchAllList();
      setAllList(allList)
      // const enterpriseFetch = await enterpriseFetchList();
      setEnterpriseList(allList["Enterprise-ready apps"]);
      // const dailyFetch = await dailyFetchList();
      setDailyList(allList["Daily Tools"]);
      // const botFetch = await botFetchList();
      setBotList(allList["Brilliant Bots"]);
    };
    getFetchList();
  }, [])

  const handleContainerRefArr = (ref) => {
    setAllStaffPicksContainer((oldRef) => {
      return [...oldRef, ref];
    });
  };

  const updateAllStaffPicks = useCallback((pick) => {
    return setAllStaffPicks((oldPick) => {
      let newPick = [...oldPick, pick];
      return newPick;
    });
  }, []);


  const productivityFetchList = async () => {
    const list = tools.filter((item) => item.productivity)
    return list
  }
  const officeToolsFetchList = async () => {
    const list = tools.filter((item) => item.office_tools)
    return list
  }
  const designFetchList = async () => {
    const list = tools.filter((item) => item.design)
    return list
  }

  const othersFetchList = async () => {
    const list = tools.filter((item) => item.others)
    return list
  }

  const upDateSearchInputText = async (text) => {
    allStaffPicksContainer.map((pick) =>
      pick.removeAttribute("hidden")
    );
    setInputText(text)
    const productivityList = shuffleProductivityList(text)
    setProductivityList(productivityList)
    const officeToolsList = shuffleOfficeToolsList(text)
    setOfficeToolsList(officeToolsList)
    const designList = shuffleDesignList(text)
    setDesignList(designList)
    const othersList = shuffleOthersList(text)
    setOthersList(othersList)
    // const enterpriseList = await shuffleEnterpriseList(text)
    // setEnterpriseList(enterpriseList)
    // const dailyList = await shuffleDailyList(text)
    // setDailyList(dailyList)
    // const botList = await shuffleBotList(text);
    // setBotList(botList)
  }
  const fetchAllList = async () => {
    const url = `https://externaltools.zuri.chat/api/tools?sortBy=collections`;
    const res = await fetch(url);
    const status = res.status;
    const data = await res.json(); if (status >= 200 && status <= 299) {
      setIsLoading(false);
      setIsNetwork(false);
      setIsError(false);
      const list = data.data;
      return list;
    }
    else if (status >= 500) {
      setIsLoading(false);
      setIsNetwork(true);
      setIsError(false);
    }
    else {
      setIsLoading(false);
      setIsError(true);
      setIsNetwork(false);
    }
  }
  // function filter seaarch on bot daily and ent tools
  // const upDateInputText = async (text) => {

  //   setInputText(text)
  //   const enterpriseList = await shuffleEnterpriseList(text)
  //   setEnterpriseList(enterpriseList)
  //   const dailyList = await shuffleDailyList(text)
  //   setDailyList(dailyList)
  //   const botList = await shuffleBotList(text);
  //   setBotList(botList)
  // }
  const shuffleEnterpriseList = (text) => {
    const list = allList["Enterprise-ready apps"].filter(
      (item) =>
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    if (list.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoEnterpriseFound(false);
        console.log(list);
      }, 1000);
      return list;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoEnterpriseFound(true);
      }, 1000);
      return list;
    }
  }
  // const shuffleDailyList = (text) => {
  //   const list = tools.filter(
  //     (item) =>
  //       item.daily &&
  //       item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
  //   );
  //   return list;
  // };
  // const shuffleBotList = (text) => {
  //   const list = tools.filter(
  //     (item) =>
  //       item.bot &&
  //       item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
  //   );
  //   return list;
  // };

  const shuffleProductivityList = (text) => {
    const list = tools.filter(
      (item) =>
        item.productivity &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };

  const shuffleOfficeToolsList = (text) => {
    const list = tools.filter(
      (item) =>
        item.office_tools &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };

  const shuffleDesignList = (text) => {
    const list = tools.filter(
      (item) =>
        item.design &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };

  const shuffleOthersList = (text) => {
    const list = tools.filter(
      (item) =>
        item.others &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };

  // shuffle daily tols on search
  const shuffleDailyList = (text) => {
    const list = allList["Daily Tools"].filter(
      (item) =>
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    if (list.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoDailyFound(false);
      }, 1000);
      return list;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoDailyFound(true);
      }, 1000);
      return list;
    }
  };
  //  shuffle bot tools on search
  const shuffleBotList = (text) => {
    const list = allList["Brilliant Bots"].filter(
      (item) =>
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    if (list.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoBotFound(false);
      }, 1000);
      return list;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setNoBotFound(true);
      }, 1000);
      return list;
    }
  };
  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools directory page */}
      {/* <ToolsMainPage /> */}
      <SearchFieldTools sendInputText={upDateSearchInputText} />
      <CategoriesSection
        picks={allStaffPicks}
        picksContainer={allStaffPicksContainer}
      />
      {productivityList.length === 0 &&
        officeToolsList.length === 0 &&
        designList.length === 0 &&
        othersList.length === 0 && (
          <h2 className={`font-semibold text-center lg:text-lg text-base`}>
            There is no search result for "{inputText}"
          </h2>
        )}
      <Container
        title={`productivity tools`}
        toolsLength={productivityList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllStaffPicks={updateAllStaffPicks}
          title='productivity tools'
          link={false}
          icon={false}
        />
        <Productivity list={productivityList} text={inputText} />
      </Container>
      <Container
        title={`design tools`}
        toolsLength={designList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllStaffPicks={updateAllStaffPicks}
          title='design tools'
          link={false}
          icon={false} />
        <DesignTools list={designList} text={inputText} />
      </Container>
      <Container
        title={`office_tools`}
        toolsLength={officeToolsList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllStaffPicks={updateAllStaffPicks}
          title="office_tools"
          link={false}
          icon={false} />
        <OfficeTools list={officeToolsList} text={inputText} />
      </Container>
      <Container
        title={`others`}
        toolsLength={othersList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllStaffPicks={updateAllStaffPicks}
          title="others"
          link={false}
          icon={false} />
        <OtherTools list={othersList} text={inputText} />
      </Container>
      {/* enterprise tools */}
      {/* <TitleBox title="enterprise-ready apps" link={false} icon={false} />
      <EnterpriseTools
        list={enterpriseList}
        text={inputText}
        loading={isLoading}
        error={isError}
        network={isNetwork}
        noSearch={noEnterpriseFound} /> */}
      {/* daily tools */}
      {/* <TitleBox title="daily tools" link={false} icon={false} />
      <DailyTools
        list={dailyList}
        text={inputText}
        loading={isLoading}
        error={isError}
        network={isNetwork}
        noSearch={noDailyFound}
      /> */}
      {/* bot tools */}
      {/* <TitleBox title="brilliant bots" link={false} icon={false} />
      <BotTools
        list={botList}
        text={inputText}
        loading={isLoading}
        error={isError}
        network={isNetwork}
        noSearch={noBotFound}
      /> */}
    </div>
  );
};


export default ToolsDirectory;
