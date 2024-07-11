import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const postStyle = {
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '20px',
    }
    const { id, title, } = post;
    return (
        <div style={postStyle}>
            <h3>Post of id:{id}</h3>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;