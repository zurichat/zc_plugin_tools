import React from 'react'
import Tools from '../fragments/tools/Tools';
import Tool from '../fragments/tools/Tool';
import TitleBox from '../fragments/TitleBox';
import LoaderGif from '../fragments/LoaderGif';

const RecommendTools = ({list, text, loading, error, network, noSearch}) => {
    if(loading){
        return <LoaderGif />;
    }
  if (error) {
    return <h2>Failed to load tools, client error!!!</h2>;
  }
  if (network) {
    return <h2>Failed to load tools,please check your network settings and reload page</h2>;
  }
    return (
      <div style={{ width: "100%", margin: "3rem 0rem" }}>
        <TitleBox title="available tools" text="filter" link={false} />
        <Tools list={list}>
          {noSearch === false
            ? list.map(({ name, id, description, icon }) => (
                <Tool
                  key={id}
                  icon={icon}
                  title={name}
                  text={description}
                  btn="add"
                  pad={true}
                />
              ))
            : `No result of  "${text}"  found for available tools`}
        </Tools>
      </div>
    );
}

export default RecommendTools
