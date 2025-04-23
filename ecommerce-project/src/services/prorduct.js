import axios from "axios";

const api = axios.create({
    baseURL:'https://fakestoreapi.com'
})

export const getProductApi = ()=>{
    return api.get("/products")
}

export const getProductCategoryApi = ()=>{
    return api.get("/products/categories")
}
export const getSingleCategoryApi = (id)=>{
    return api.get(`/products/category/${id}`)
}
export const postRegister = (data)=>{
    return api.post("/users",data)
}
export const postLogin = (data)=>{
    return api.post("/auth/login",data)
}
