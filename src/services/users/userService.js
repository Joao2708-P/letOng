import axios from "axios";
import baseURL from "../apiConfig";

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${baseURL}users/`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}users/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}users/login`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};