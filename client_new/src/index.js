// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const Root = () => {
//   return (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// };

// export default Root;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import "./index.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>Error in my-app. Check browser console for details.</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
