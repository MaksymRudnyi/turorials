import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions';

export const Post = ({ articles, fetchArticles}) => {
    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    return (
        <div>
            post
            <h1>{articles[0]?.title}</h1>
            <h2>{articles[0]?.body}</h2>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const loadData = (store, param) => {
    // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
    // So we need to use store itself to load data
    return store.dispatch(fetchArticles(param)); // Manually dispatch a network request
};

export default {
    component: connect(
        mapStateToProps,
        {fetchArticles}
    )(Post),
    loadData
}