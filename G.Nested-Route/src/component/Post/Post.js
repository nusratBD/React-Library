import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.pId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[params])
    return (
        <div>
            <h1>Details Of Post Number: {post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;