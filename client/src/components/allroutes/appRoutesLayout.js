import React from "react";
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppLayout = ({ children }) => (
  <div className="">
    <div className="">{children}</div>
  </div>
);

const AppLayoutRoutes = ({ component: Component, ...rest }) => {
  // const history = useHistory();
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  // const name = history.location.pathname.slice(1);
  // const capitalizedName = capitalizeFirstLetter(name);
  // console.log("app layout", history.location.pathname);
  return (
    <div>
      <div className="mx-8 my-4">
        <div className="flex justify-between mb-3">
          {/* <div className="font-black text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
            {capitalizedName}
          </div> */}
          <Link to={"/"} className="no-underline">
            <div className="flex justify-between items-center space-x-2 cursor-pointer text-black bg-gray-200 border-gray-400 px-2 py-1 hover:bg-gray-400  rounded-full transition transform duration-300 ease-in-out">
              <div className="font-bold hover:text-white">
                <FontAwesomeIcon icon={faChevronLeft} className="" />
              </div>
              <div className="hover:text-white">Back to Tools</div>
            </div>
          </Link>
        </div>
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
