import React from "react";
import { Route } from "react-router-dom";

const HomeLayout = ({ children }) => (
  <div className="">
    <div className="">{children}</div>
  </div>
);

const HomeLayoutRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
      )}
    />
  );
};

export default HomeLayoutRoutes;

// const LoginLayout = ({ children }) => (
//     <div>
//       {children}
//     </div>
//   );

//   const LoginLayoutRoute = ({component: Component, ...rest}) => {
//     return (
//       <Route {...rest} render={props => (
//         <LoginLayout>
//             <Component {...props} />
//         </LoginLayout>
//       )} />
//     )
//   };

// export default LoginLayoutRoute;
