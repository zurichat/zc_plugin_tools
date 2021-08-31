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
<<<<<<< HEAD
        <h1>Edited Again, wow, this is nice.</h1>
=======
        <h1>Edited Again, wowjonhi ji nh</h1>
>>>>>>> f7b92c65d71b7218e4f066150e2ac70f4d6276e9
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
