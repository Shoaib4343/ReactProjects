import axios from "axios";

const countryApiBaseUrl = axios.create({
    baseURL:'https://restcountries.com/v3.1'
})


// get all the countries
export const getAllCountriesApi = ()=>{
    return countryApiBaseUrl.get("/all")
}

// get Specific country 
export const getSpecificCoutryApi = (id)=>{
    return countryApiBaseUrl.get(`/name/${id}`)
}