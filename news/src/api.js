import axios from 'axios';

const API_KEY = 'f6b0588d28c34ddfa1bc6762ad5fdda5';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchNews = (category = 'general') => {
    return axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            country: 'in',
            category,
            apiKey: 'f6b0588d28c34ddfa1bc6762ad5fdda5'
        }
    });
};
