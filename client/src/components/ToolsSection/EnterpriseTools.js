import React from 'react'
import Tools from "../fragments/tools/Tools";
import Tool from '../fragments/tools/Tool';

const EnterpriseTools = ({list, text}) => {
    return (
      <div style={{ width: "100%", margin: "1rem 0rem 2rem 0rem" }}>
        {list.length > 0 ? (
          <Tools>
            {list.map((item, index) => (
              <Tool
                key={index}
                icon={item.image}
                title={item.name}
                text={item.description}
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
