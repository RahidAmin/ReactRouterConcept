import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, } = post;
    const postStyle = {
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '20px',
    }

    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post of id:{id}</h3>
            <h4>{title}</h4>
            {/* <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link> */}
            <button onClick={handleShowDetails}>Click to Show Details</button>
        </div>
    );
};

export default Post;