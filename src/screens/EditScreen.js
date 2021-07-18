import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const handleEdit = (title, content) => {
    const callback = () => {
      navigation.navigate('Index');
    };

    editBlogPost({ id, title, content }, callback);
  };

  return (
    <BlogPostForm
      onSubmit={handleEdit}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

export default EditScreen;
