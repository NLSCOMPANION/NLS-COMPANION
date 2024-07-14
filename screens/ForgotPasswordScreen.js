import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors'; 
import NLSLogo from '../assets/nlslogo.png'; // Ensure this path is correct

const ForgotPasswordScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={NLSLogo} style={styles.logo} />
      </View>

      <Text style={styles.resetPassword}>Reset Password</Text>
      <Text style={styles.description}>
        Enter the email address you use for DLS Companion, and we'll help you create a new password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Email Address"
        placeholderTextColor="#aaa"
        // Add onChangeText and value props as needed
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
    backgroundColor: Colors.secondary,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200, // Adjust the width as per your design
    height: 200, // Adjust the height as per your design
    resizeMode: 'contain',
  },
  resetPassword: {
    fontSize: 24,
    fontFamily: 'ProductSans-Bold',
    marginBottom: 10,
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: Colors.primary,
    textAlign: 'center', // Center text
  },
  input: {
    height: 50,
    width: '100%', // Take full width
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: Colors.primary,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    width: '100%', // Take full width
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 18,
    fontFamily: 'ProductSans-Bold',
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: Colors.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
