import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title={'Save Blog Post'} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
