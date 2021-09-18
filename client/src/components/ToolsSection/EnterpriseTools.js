import React from 'react'
import Tools from "../fragments/tools/Tools";
import Tool from '../fragments/tools/Tool';

const EnterpriseTools = ({list, text, loading, error, network, noSearch }) => {
  if (loading) {
     return <h2>Loading...</h2>;
   }
   if (error) {
     return <h2>Failed to load tools, client error!!!</h2>;
   }
   if (network) {
     return (
       <h2>
         Failed to load tools,please check your network settings and reload page
       </h2>
     );
   }
    return (
      <div style={{ width: "100%", margin: "1rem 0rem 2rem 0rem" }}>
        {noSearch === false ? (
          <Tools list={list}>
            {list.map(({ name, id, description, icon }) => (
              <Tool
              key={id}
              icon={icon}
              title={name}
              text={description}
                pad={false}
              />
            ))}
          </Tools>
        ) : (
          `No result of  "${text}"  found for enterprise tools`
        )}
      </div>
    );
}

export default EnterpriseTools
