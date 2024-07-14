import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, Modal, TextInput } from 'react-native';
import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const updateProfile = () => {
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    closeModal();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.profileSection}>
        <Image source={require('../assets/profile.jpeg')} style={styles.profilePicture} />
        <View>
          <Text style={[styles.profileName, { color: theme.text }]}>ILESANMI</Text>
          <Text style={[styles.profileEmail, { color: theme.text }]}>Email</Text>
        </View>
        <TouchableOpacity style={styles.updateProfileButton} onPress={openModal}>
          <Text style={[styles.updateProfileButtonText, { color: theme.buttonText }]}>Update Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.settingsSection}>
        <View style={styles.settingRow}>
          <Text style={[styles.settingText, { color: theme.text }]}>Hide Scoreboard</Text>
          <Switch />
        </View>
        <View style={styles.settingRow}>
          <Text style={[styles.settingText, { color: theme.text }]}>Turn on Dark Mode</Text>
          <Switch value={theme === Colors.darkTheme} onValueChange={toggleTheme} />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.settingsOptions}>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>Message Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>Rate NLS Companion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={[styles.settingOptionText, { color: theme.text }]}>FAQs</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaa"
              onChangeText={setName}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#aaa"
              onChangeText={setPhoneNumber}
              value={phoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              onChangeText={setEmail}
              value={email}
            />
            <TouchableOpacity style={styles.saveButton} onPress={updateProfile}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#aaa',
  },
  updateProfileButton: {
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  updateProfileButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
  },
  settingsOptions: {
    marginBottom: 20,
  },
  settingOption: {
    paddingVertical: 10,
  },
  settingOptionText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
