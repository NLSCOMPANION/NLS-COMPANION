import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker
import NLSLogo from '../assets/nlslogo.png'; // Import your logo image
import Colors from '../constants/Colors'; // Adjust path as per your project structure
import api from '../api'; // Import your Axios instance

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [referralEmail, setReferralEmail] = useState('');
  const [heardAbout, setHeardAbout] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State for button disable

  useEffect(() => {
    // Enable button if all mandatory fields are filled
    setIsButtonDisabled(
      !(firstName && lastName && email && phoneNumber && password)
    );
  }, [firstName, lastName, email, phoneNumber, password]);

  const handleRegister = () => {
    // Implement registration logic
    api.post('/register/', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password,
      referral_email: referralEmail,
      heard_about: heardAbout,
    })
    .then(response => {
      console.log('Registration Successful:', response.data);
      // Navigate to the Login screen after successful registration
      navigation.navigate('Login');
    })
    .catch(error => {
      console.error('Registration Error:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show an alert or error message)
      Alert.alert('Registration Failed', error.response ? error.response.data.detail : 'An error occurred. Please try again.');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={NLSLogo} style={styles.logo} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Referral Email (optional)"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={setReferralEmail}
        value={referralEmail}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={heardAbout}
          style={styles.picker}
          onValueChange={(itemValue) => setHeardAbout(itemValue)}
        >
          <Picker.Item label="How did you hear about DLSCOMPANION?" value="" />
          <Picker.Item label="Social media - Facebook, Instagram, etc." value="social_media" />
          <Picker.Item label="Instant Messaging - Whatsapp, Telegram, etc." value="instant_messaging" />
          <Picker.Item label="Family and Friends" value="family_friends" />
          <Picker.Item label="Google Search" value="google_search" />
          <Picker.Item label="Recommended" value="recommended" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.login}>Already have an account? Login</Text>
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
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust the width as per your design
    height: 100, // Adjust the height as per your design
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
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#aaa', // Disabled button color
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 18,
    fontFamily: 'ProductSans-Bold',
  },
  login: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 16,
  },
});

export default RegistrationScreen;
