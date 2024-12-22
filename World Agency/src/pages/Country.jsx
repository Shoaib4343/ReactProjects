import React, { useEffect, useState, useTransition } from "react";
import { getAllCountriesApi } from "../api/countryApi";
import ImageCountryCart from "../components/imageCountryCart";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, startTrasition] = useTransition();
  const [api, setapi] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    startTrasition(async () => {
      const res = await getAllCountriesApi();
      setapi(res.data);
    });
  }, []);

  // Serach country
  const searchCountry = (curCountry)=>{
    if(search){
     return curCountry.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return api
  }

  const  filterCountry = (curCountry)=>{
    if(filter === 'All') return curCountry
    return curCountry.region === filter
   }

  // Search Filter 
  const serachedCountries = api.filter((curCountry)=>searchCountry(curCountry) && filterCountry(curCountry))

  if (isPending) return <h1>Loading....</h1>;
  return (
    <>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-20 gap-4 my-10">
        {serachedCountries.map((curApi, index) => (
          <ImageCountryCart key={index} item={curApi} />
        ))}
      </ul>
    </>
  );
};

export default Country;
