import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Row with Profile Picture, Greeting, and Alarm Bell */}
      <View style={styles.topRow}>
        <Image 
          source={require('../assets/profilepicture.png')} 
          style={styles.profilePicture} 
        />
        <Text style={styles.greetingText}>HI, PossibleDeveloper</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Settings')}
        >
          {/* Alarm Icon can be added here */}
        </TouchableOpacity>
      </View>

      {/* Scoreboard as a Progress Bar */}
      <View style={styles.scoreboard}>
        <Text style={styles.scoreboardText}>Scoreboard</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '70%' }]} />
        </View>
      </View>

      {/* Today's Task in a Card */}
      <View style={styles.todayTaskCard}>
        <Text style={styles.todayTaskText}>Today's Task</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.startButton}
            // onPress={() => navigation.navigate('TodayTask')}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.rpcButton}
            // onPress={() => navigation.navigate('ChatAdmin')}
          >
            <Text style={styles.rpcButtonText}>Daily RPC</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card for Practice Sections */}
      <View style={styles.practiceCard}>
        <TouchableOpacity 
          style={styles.practiceButton}
          onPress={() => navigation.navigate('PracticeTheories')}
        >
          <Text style={styles.practiceButtonText}>Practice Theory</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.practiceButton}
          onPress={() => navigation.navigate('PracticeMCQ')}
        >
          <Text style={styles.practiceButtonText}>Practice MCQ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.practiceButton}
          // onPress={() => navigation.navigate('SampleDraft')}
        >
          <Text style={styles.practiceButtonText}>Sample Draft</Text>
        </TouchableOpacity>
      </View>

      {/* NLS Recommended Textbooks in a Card */}
      <View style={styles.recommendedCard}>
        <TouchableOpacity 
          style={styles.recommendedButton}
          // onPress={() => navigation.navigate('NLS Recommended Textbooks')}
        >
          <Text style={styles.recommendedButtonText}>NLS Recommended Textbooks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  greetingText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: Colors.primary,
  },
  scoreboard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  scoreboardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  progressBar: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  todayTaskCard: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  todayTaskText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Full width for buttons
  },
  startButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rpcButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    marginLeft: 5,
  },
  rpcButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  practiceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  practiceButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  practiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedCard: {
    marginBottom: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  recommendedButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    width: '100%', // Full width for the button
  },
  recommendedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
