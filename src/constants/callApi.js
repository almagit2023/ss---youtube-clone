import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_YT_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const callYTApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}