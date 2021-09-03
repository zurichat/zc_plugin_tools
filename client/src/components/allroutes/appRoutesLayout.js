import React from "react";
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const AppLayout = ({ children }) => {
  <div className="flex flex-grow min-h-screen">
    <div className="flex-grow bg-gray-200">{children}</div>
  </div>;
};

const AppLayoutRoutes = ({ component: Component, ...rest }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer p-2 flex space-x-2  w-max rounded-full text-gray-700"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
        </div>
        <div className="">Back to Main</div>
      </div>
      <Route
        {...rest}
        render={(props) => (
          <AppLayout>
            <Component {...props} />
          </AppLayout>
        )}
      />
    </div>
  );
};

export default AppLayoutRoutes;
