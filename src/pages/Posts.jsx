import React, { useState, useEffect } from 'react';

const Post = ({ post }) => (
  <div className="col-11 border mx-auto shadow-lg ps-5 pt-5 pb-5 mb-5 mt-3 pe-5">
    <h3>{post.title}</h3>
    <br/>
    <p>{post.body}</p>
  </div>
);

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
