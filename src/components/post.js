import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

import { fetchArticles } from '../actions';

export const Post = ({ articles, fetchArticles, ...rest}) => {
    const { id } = useParams();

    useEffect(() => {
        fetchArticles(id);
    }, [fetchArticles, id]);

    return (
        <div>
            post
            <h1>{articles?.title}</h1>
            <h2>{articles?.overview}</h2>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        articles: state.articles,
        ...props
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