import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClickAdd = () => {
    addBlogPost(title, content);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={(newText) => setTitle(newText)} style={styles.input} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(newText) => setContent(newText)}
        style={styles.input}
      />
      <Button title={'Add Blog Post'} onPress={handleClickAdd} />
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

export default CreateScreen;
