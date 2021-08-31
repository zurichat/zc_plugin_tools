import React from "react";
import Head from "next/head";

import { appData as data } from "../appData";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{`${data.name} - ${data.description}`}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className={`text-center p-12`}>
        <h1 className={`text-gray-800 text-5xl font-extrabold`}>{data.name}</h1>
        <p className={`text-2xl text-gray-600`}>{data.description}</p>
        <h1>Edited by CI/CD</h1>
        <h1>Edited Again</h1>
        <h1>Edited  yet Again</h1>
        <h1
          style={{
            marginTop: "20px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Hi Oscar E ✌
        </h1>
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
    </React.Fragment>
  );
}
