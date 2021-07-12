import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state: blogPosts, addBlogPost } = useContext(Context);

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
      <Button title={'Add new blog post'} onPress={addBlogPost} />
      <FlatList data={blogPosts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default IndexScreen;
