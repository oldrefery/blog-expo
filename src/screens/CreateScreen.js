import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const handleClickAdd = (content, title) => {
    const callback = () => {
      navigation.pop();
    };

    addBlogPost(title, content, callback);
  };

  return <BlogPostForm onSubmit={handleClickAdd} />;
};

export default CreateScreen;
