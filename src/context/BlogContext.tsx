import React from "react";
import { useState, useReducer } from "react";

const BlogContext = React.createContext(" Default Value ");

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useState([]);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  // const addBlogPost = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     {
  //       title: `Blog Post #${blogPosts.length + 1} `,
  //     },
  //   ]);
  // };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
