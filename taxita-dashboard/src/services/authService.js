import axiosInstance from "./axiosInstance"

export const loginApi = (data)=>{
    return axiosInstance.post("/auth/login", data);
}