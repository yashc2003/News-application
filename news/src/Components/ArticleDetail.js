import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = useSelector(state => state.articles.articles[id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;
