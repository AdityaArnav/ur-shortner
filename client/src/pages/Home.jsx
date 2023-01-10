import React from "react";
import InputURL from "../components/InputURL";
import List from "../components/List";

const Home = () => {
  return (
    <>
      <h1 className="text-center my-4 text-4xl font-bold font-sans">
        Url Shortner
      </h1>
      <InputURL />
      <List />
    </>
  );
};

export default Home;
