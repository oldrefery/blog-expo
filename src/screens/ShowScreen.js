import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  const blogPost = state.find((el) => el.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate('Edit')} style={styles.editIcon}>
        <Ionicons name="pencil" size={25} />
      </Pressable>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    paddingRight: 10,
  },
});

export default ShowScreen;
