import axios from "axios";
import { loader } from "./loader";

export async function getdata(url) {
  if (!url || !url.trim()) {
    throw new Error("No url Provided");
  }

  try {
    loader(true);
    const response = await axios.get(url);
    loader(false);
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
