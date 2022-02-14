import React from 'react';
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;

    return (
        <div className="ui container">
            <h1>Page Not Found!!!</h1>
            <p>Please try again!</p>
        </div>
    );
};

export default {
    component: NotFoundPage
}