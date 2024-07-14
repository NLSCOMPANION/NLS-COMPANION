import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors'; // Adjust path as per your project structure
import NLSLogo from '../assets/nlslogo.png'; // Import your logo image

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State for button disable

  useEffect(() => {
    // Enable button if both email and password are filled
    setIsButtonDisabled(!(email && password));
  }, [email, password]);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Keep me signed in:', isChecked); // Log the state of the checkbox

    // Navigate to the Main screen after successful login
    navigation.navigate('DashboardStack');
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={NLSLogo} style={styles.logo} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <View style={styles.checkbox}>
            {isChecked && <View style={styles.checkedBox} />}
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Keep me signed in</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>New to NLS Companion? Create Free Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.secondary,
  },
  logoContainer: {
    alignItems: 'center', // Center horizontally
    marginBottom: 40,
  },
  logo: {
    width: 200, // Adjust the width as per your design
    height: 200, // Adjust the height as per your design
    resizeMode: 'contain',
  },
  input: {
    height: 50,
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
  buttonDisabled: {
    backgroundColor: '#aaa', // Disabled button color
  },
  register: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: 'right',
    color: Colors.primary,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkedBox: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  label: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default LoginScreen;
