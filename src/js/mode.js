import axios from "axios";

// base url
export const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

export async function getdata(url) {
  if (!url || !url.trim()) {
    throw new Error("No url Provided");
  }

  try {
    // loader(true)
    const response = await axiosInstance.get(url);
    // loader(false)
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
