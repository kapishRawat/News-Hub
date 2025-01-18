

import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

//getNewsByCategory

export async function getNewsByCategory(category) {
  const response = await api.get(
    `/everything?q=${category}&apiKey=64eab79259ae483891b4f6e73e426775`
  );
  return response.data;
}

//getTopNewsByCountry


export const getTopNewsByCountry = async (country) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=64eab79259ae483891b4f6e73e426775`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
};


//searchNews

export async function getNewsByQuery(query) {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=64eab79259ae483891b4f6e73e426775`
  );
  return response.data;
}
