import React from "react";

const Day = ({ day }) => {
  return (
    <section className={`figma-msgs_time`}>
      <div className={`figma-msgs_time_line`}></div>
      <h1 className={`figma-msgs_time_day`}>{day}</h1>
    </section>
  );
};

export default Day;
