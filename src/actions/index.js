import axios from 'axios';

import config from "../../config";

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = (movieId) => async dispatch => {
    let url;
    if (!movieId) {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${config.apikey}&language=en-US&page=1`;
    } else {
        url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.apikey}&language=en-US`;
    }

    const res = await axios.get(url);

    dispatch({
        type: FETCH_ARTICLES,
        payload: res.data
    });
};