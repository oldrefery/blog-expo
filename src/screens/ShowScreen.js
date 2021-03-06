import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  const blogPost = state.find((el) => el.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  const handleEdit = () => {
    navigation.navigate('Edit', { id });
  };

  return {
    headerRight: () => (
      <Pressable onPress={handleEdit} style={styles.editIcon}>
        <Ionicons name="pencil" size={25} />
      </Pressable>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
  container: {
    padding: 10,
  },
});

export default ShowScreen;
