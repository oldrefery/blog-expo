import React, { useContext } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state: blogPosts, addBlogPost, deleteBlogPost } = useContext(Context);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.blogItem}>
        <Text style={styles.title}>{item.title}</Text>
        <Pressable onPress={() => deleteBlogPost(item.id)}>
          <Ionicons name={'ios-trash'} style={styles.icon} />
        </Pressable>
      </View>
    );
  };

  const keyExtractor = (item) => `blog-${item.id}`;

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title={'Add new blog post'} onPress={addBlogPost} />
      <FlatList data={blogPosts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

const styles = StyleSheet.create({
  blogItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
