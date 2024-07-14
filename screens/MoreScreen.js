import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More Screen</Text>
      <Text style={styles.text}>Add your content here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white, // Set background color as needed
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black, // Set text color as needed
  },
});

export default MoreScreen;
