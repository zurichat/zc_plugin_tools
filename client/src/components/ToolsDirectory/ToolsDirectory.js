import React, { useState, useEffect, useCallback } from "react";
import ToolsMainPage from "../MainTools/ToolsMain";
import TitleBox from "../fragments/TitleBox";
import EnterpriseTools from "../ToolsSection/EnterpriseTools";
import DailyTools from "../ToolsSection/DailyTools";
import BotTools from "../ToolsSection/BotTools";
import SearchFieldTools from "./SearchFieldTools";
import CategoriesSection from "../fragments/CategoriesSection";
import Container from "../sections/Container";

const ToolsDirectory = () => {
  const [allList, setAllList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isNetwork, setIsNetwork] = useState(false);
  //  enterprise list and states
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [noEnterpriseFound, setNoEnterpriseFound] = useState(false);
  // daily tools list and states
  const [dailyList, setDailyList] = useState([]);
  const [noDailyFound, setNoDailyFound] = useState(false);
  // bot tools list and states
  const [botList, setBotList] = useState([]);
  const [noBotFound, setNoBotFound] = useState(false);
  // Input state
  const [inputText, setInputText] = useState("");
  // Categories filter
  const [allCategories, setAllCategories] = useState([]);
  const [allCategoriesContainer, setAllCategoriesContainer] = useState([]);

  useEffect(() => {
    const getFetchList = async () => {
      try {
        const allList = (await fetchAllList()) || {};
        setAllList(allList);
        // const enterpriseFetch = await enterpriseFetchList();
        setEnterpriseList(allList["Enterprise-ready apps"]);
        // const dailyFetch = await dailyFetchList();
        setDailyList(allList["Daily Tools"]);
        // const botFetch = await botFetchList();
        setBotList(allList["Brilliant Bots"]);
      } catch (error) {
        console.log(error);
      }
    };

    getFetchList();
  }, []);
  const fetchAllList = async () => {
    const origin = window.location.origin;
    let isLocal = origin.includes("localhost");
    let apiBase = isLocal
      ? "http://localhost:8500/api"
      : "https://externaltools.zuri.chat/api";

    const url = `${apiBase}/tools?sortBy=collections`;
    const res = await fetch(url);
    const status = res.status;
    const data = await res.json();
    console.log(data);
    if (status >= 200 && status <= 299) {
      setIsLoading(false);
      setIsNetwork(false);
      setIsError(false);
      const list = data.data;
      return list;
    } else if (status >= 500) {
      setIsLoading(false);
      setIsNetwork(true);
      setIsError(false);
    } else {
      setIsLoading(false);
      setIsError(true);
      setIsNetwork(false);
    }
  };
  // function filter seaarch on bot daily and ent tools
  const upDateInputText = async (text) => {
    allCategoriesContainer.map((category) =>
      category.removeAttribute("hidden")
    );
    setInputText(text);
    const enterpriseList = await shuffleEnterpriseList(text);
    setEnterpriseList(enterpriseList);
    const dailyList = await shuffleDailyList(text);
    setDailyList(dailyList);
    const botList = await shuffleBotList(text);
    setBotList(botList);
  };
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
  // Categories filter function start //
  const handleContainerRefArr = (ref) => {
    setAllCategoriesContainer((oldRef) => {
      return [...oldRef, ref];
    });
  };
  const updateAllCategories = useCallback((category) => {
    return setAllCategories((oldCategory) => {
      let newCategory = [...oldCategory, category];
      return newCategory;
    });
  }, []);

  // Categories filter function end //
  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools directory page */}
      {/* <ToolsMainPage /> */}
      <SearchFieldTools sendInputText={upDateInputText} />
      <CategoriesSection
        categories={allCategories}
        categoriesContainer={allCategoriesContainer}
      />
      {/* enterprise tools */}
      {botList.length === 0 &&
        enterpriseList.length === 0 &&
        dailyList.length === 0 && (
          <h2 className={`font-semibold text-center lg:text-lg text-base`}>
            There is no search result for "{inputText}"
          </h2>
        )}
      <Container
        title={`enterprise-ready apps`}
        toolsLength={enterpriseList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          title='enterprise-ready apps'
          updateAllCategories={updateAllCategories}
          link={false}
          icon={false}
        />
        <EnterpriseTools
          list={enterpriseList}
          text={inputText}
          loading={isLoading}
          error={isError}
          network={isNetwork}
          noSearch={noEnterpriseFound}
        />
      </Container>

      {/* daily tools */}
      <Container
        title={`daily tools`}
        toolsLength={dailyList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllCategories={updateAllCategories}
          title='daily tools'
          link={false}
          icon={false}
        />
        <DailyTools
          list={dailyList}
          text={inputText}
          loading={isLoading}
          error={isError}
          network={isNetwork}
          noSearch={noDailyFound}
        />
      </Container>

      {/* bot tools */}
      <Container
        title={`brilliant bots`}
        toolsLength={botList.length}
        updateRefArr={handleContainerRefArr}
      >
        <TitleBox
          updateAllCategories={updateAllCategories}
          title='brilliant bots'
          link={false}
          icon={false}
        />
        <BotTools
          list={botList}
          text={inputText}
          loading={isLoading}
          error={isError}
          network={isNetwork}
          noSearch={noBotFound}
        />
      </Container>
    </div>
  );
};

export default ToolsDirectory;
