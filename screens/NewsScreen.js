// NewsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News Screen Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewsScreen;
