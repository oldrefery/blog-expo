import React, { createContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={'temporary'}>{children}</BlogContext.Provider>;
};

export default BlogContext;
