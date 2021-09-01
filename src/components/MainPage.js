import React from "react";

const MainPage = () => {
  return (
    <div className="font-bold border-2 border-red-500 bg-gray-400">
      <p className="text-center ">
        This is the main Page with{" "}
        <span className="text-blue-800 font-extrabold headreact">React</span>
      </p>
      <div className={`text-center p-12`}>
        <h1 className={`text-gray-800 text-5xl font-extrabold font-fam1`}>
          External Tools
        </h1>
        <p className={`text-2xl text-gray-600`}>
          The zuri chat company tools plugin
        </p>
        <h1>Edited by CI/CD</h1>
        <h1>Edited Again</h1>
        <input
          style={{
            marginTop: "20px",
            fontSize: "20px",
            textAlign: "center",
            border: "1px solid black",
          }}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default MainPage;
