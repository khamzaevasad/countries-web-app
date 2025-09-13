import axios from "axios";
import { loader } from "./loader";

// axios instance
export const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export async function getdata(url) {
  if (!url || !url.trim()) {
    throw new Error("No url Provided");
  }

  try {
    loader(true);
    const response = await axiosInstance.get(url);
    loader(false);
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
