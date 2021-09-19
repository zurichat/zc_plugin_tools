import React, { useState, useEffect, useCallback } from "react";
// import ToolsMainPage from "../MainTools/ToolsMain";
import { tools } from "../../data/tools.data";
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
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [dailyList, setDailyList] = useState([])
  const [botList, setBotList] = useState([])
  const [productivityList, setProductivityList] = useState([])
  const [officeToolsList, setOfficeToolsList] = useState([])
  const [designList, setDesignList] = useState([])
  const [othersList, setOthersList] = useState([])
  const [inputText, setInputText] = useState('')
  const [allStaffPicks, setAllStaffPicks] = useState([]);
  const [allStaffPicksContainer, setAllStaffPicksContainer] = useState([]);


  useEffect(() => {
    const getFetchList = async () => {
      const enterpriseFetch = await enterpriseFetchList();
      setEnterpriseList(enterpriseFetch);
      const dailyFetch = await dailyFetchList();
      setDailyList(dailyFetch)
      const botFetch = await botFetchList();
      setBotList(botFetch)
      const productivityFetch = await productivityFetchList();
      setProductivityList(productivityFetch)
      const officeToolsFetch = await officeToolsFetchList();
      setOfficeToolsList(officeToolsFetch)
      const designFetch = await designFetchList();
      setDesignList(designFetch)
      const othersFetch = await othersFetchList();
      setOthersList(othersFetch)
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


  const enterpriseFetchList = async () => {
    const list = tools.filter((item) => item.enterprise)
    return list
  };
  const dailyFetchList = async () => {
    const list = tools.filter((item) => item.daily)
    return list
  }
  const botFetchList = async () => {
    const list = tools.filter((item) => item.bot)
    return list
  }

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


  const upDateInputText = async (text) => {

    allStaffPicksContainer.map((pick) =>
      pick.removeAttribute("hidden")
    );
    setInputText(text)
    const enterpriseList = shuffleEnterpriseList(text)
    setEnterpriseList(enterpriseList)
    const dailyList = shuffleDailyList(text)
    setDailyList(dailyList)
    const botList = shuffleBotList(text)
    setBotList(botList)
    const productivityList = shuffleProductivityList(text)
    setProductivityList(productivityList)
    const officeToolsList = shuffleOfficeToolsList(text)
    setOfficeToolsList(officeToolsList)
    const designList = shuffleDesignList(text)
    setDesignList(designList)
    const othersList = shuffleOthersList(text)
    setOthersList(othersList)

  }
  const shuffleEnterpriseList = (text) => {
    const list = tools.filter((item) => item.enterprise && item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1)
    return list
  }
  const shuffleDailyList = (text) => {
    const list = tools.filter(
      (item) =>
        item.daily &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };
  const shuffleBotList = (text) => {
    const list = tools.filter(
      (item) =>
        item.bot &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };

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

  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools directory page */}
      {/* <ToolsMainPage /> */}
      <SearchFieldTools sendInputText={upDateInputText} />
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
    </div >
  );
};

export default ToolsDirectory;
