import React, { useEffect, useState } from "react";
import aboutApi from "../api/AboutApi.json";
import CountryCart from "../components/CountryCart";

const About = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    setApi(aboutApi);
  }, []);
  return (
    <>
      <h1 className="text-4xl max-w-xl mx-auto font-bold text-white mb-6 text-center py-4">
        Here are the interesting facts we are proud of
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-20 py-5 ">
        {api.map((curApi) => (
          <CountryCart key={curApi.id} item={curApi} />
        ))}
      </ul>
    </>
  );
};

export default About;
