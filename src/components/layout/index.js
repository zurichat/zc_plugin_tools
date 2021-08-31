import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center">{children}</div>
  );
};

export default Layout;
