import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  const handleEdit = () => {
    const callback = () => {
      navigation.navigate('Index');
    };

    editBlogPost({ id, title, content }, callback);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput value={title} onChangeText={(newText) => setTitle(newText)} style={styles.input} />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput
        value={content}
        onChangeText={(newText) => setContent(newText)}
        style={styles.input}
      />
      <Button title={'Save Blog Post'} onPress={handleEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
export default EditScreen;
