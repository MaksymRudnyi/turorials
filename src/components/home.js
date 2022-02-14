import React, { useEffect } from 'react';
import {fetchArticles} from "../actions";
import {connect} from "react-redux";
import {
    Link
} from "react-router-dom";

export const Home = ({ articles, fetchArticles}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchArticles();
    }, [fetchArticles]);

    console.log(articles)

    if (!articles.results) {
        return 'No data'
    }

    return (
        <div>
            {articles.results.map((movie) => (
                <div key={movie.id}>
                    <Link to={`/post/${movie.id}`}>
                        <h2>{movie.title}</h2>
                    </Link>
                    <p>{movie.overview}</p>
                    <br/>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        articles: state.articles,
        ...props
    };
};

const loadData = (store) => {
    // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
    // So we need to use store itself to load data
    return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

export default {
    component: connect(
        mapStateToProps,
        {fetchArticles}
    )(Home),
    loadData
}