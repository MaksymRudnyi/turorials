import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = () => async dispatch => {
    let url = 'https://jsonplaceholder.typicode.com/posts/';

    const res = await axios.get(url);

    dispatch({
        type: FETCH_ARTICLES,
        payload: res.data
    });
};