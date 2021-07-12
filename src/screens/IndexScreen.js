import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data: blogPosts, addBlogPost } = useContext(BlogContext);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const keyExtractor = (item) => `blog-${item.id}`;

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList data={blogPosts} renderItem={renderItem} keyExtractor={keyExtractor} />
      <Button title={'Add new blog post'} onPress={addBlogPost} />
    </View>
  );
};

export default IndexScreen;
