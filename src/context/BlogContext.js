import React, { createContext, useEffect, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    console.log('add');
    const newBlogPostId = blogPosts.length + 1;
    setBlogPosts([...blogPosts, { title: `Blog Post #${newBlogPostId}`, id: newBlogPostId }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
