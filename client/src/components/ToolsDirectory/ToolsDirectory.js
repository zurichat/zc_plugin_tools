import React, { useState, useEffect, useCallback } from "react";
import ToolsMainPage from "../MainTools/ToolsMain";
import { tools } from "../../data/tools.data";
import TitleBox from "../fragments/TitleBox";
import EnterpriseTools from "../ToolsSection/EnterpriseTools";
import DailyTools from "../ToolsSection/DailyTools";
import BotTools from "../ToolsSection/BotTools";
import SearchFieldTools from "./SearchFieldTools";
import CategoriesSection from "../fragments/CategoriesSection";
import Container from "../sections/Container";

const ToolsDirectory = () => {
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [dailyList, setDailyList] = useState([]);
  const [botList, setBotList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [allCategoriesContainer, setAllCategoriesContainer] = useState([]);

  useEffect(() => {
    const getFetchList = async () => {
      const enterpriseFetch = await enterpriseFetchList();
      setEnterpriseList(enterpriseFetch);
      const dailyFetch = await dailyFetchList();
      setDailyList(dailyFetch);
      const botFetch = await botFetchList();
      setBotList(botFetch);
    };

    getFetchList();
  }, []);
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
  const handleCategoriesFilter = (category) => {};
  // Categories filter function end //
  const enterpriseFetchList = async () => {
    const list = tools.filter((item) => item.enterprise);
    return list;
  };
  const dailyFetchList = async () => {
    const list = tools.filter((item) => item.daily);
    return list;
  };
  const botFetchList = async () => {
    const list = tools.filter((item) => item.bot);
    return list;
  };
  const upDateInputText = async (text) => {
    allCategoriesContainer.map((category) =>
      category.removeAttribute("hidden")
    );
    setInputText(text);
    const enterpriseList = shuffleEnterpriseList(text);
    setEnterpriseList(enterpriseList);
    const dailyList = shuffleDailyList(text);
    setDailyList(dailyList);
    const botList = shuffleBotList(text);
    setBotList(botList);
  };
  const shuffleEnterpriseList = (text) => {
    const list = tools.filter(
      (item) =>
        item.enterprise &&
        item.name.toLocaleLowerCase().search(text.toLocaleLowerCase()) != -1
    );
    return list;
  };
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
  return (
    <div style={{ padding: "12px 2rem" }}>
      {/* insert your component for those working on the company tools directory page */}
      {/* <ToolsMainPage /> */}
      <SearchFieldTools sendInputText={upDateInputText} />
      <CategoriesSection
        categories={allCategories}
        categoriesContainer={allCategoriesContainer}
      />
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
          updateAllCategories={updateAllCategories}
          title='enterprise-ready apps'
          link={false}
          icon={false}
        />
        <EnterpriseTools list={enterpriseList} text={inputText} />
      </Container>
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
        <DailyTools list={dailyList} text={inputText} />
      </Container>
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
        <BotTools list={botList} text={inputText} />
      </Container>
    </div>
  );
};

export default ToolsDirectory;
