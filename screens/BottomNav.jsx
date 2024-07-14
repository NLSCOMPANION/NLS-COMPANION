// screens/BottomNav.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './DashboardScreen';
import TodayTasksScreen from './TodayTaskScreen';
import PracticeTheoriesScreen from './PracticeTheoriesScreen';
import PracticeMCQScreen from './PracticeMCQScreen';
import NLSCommunityScreen from './NLSCommunityScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="view-dashboard" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TodayTasks"
        component={TodayTasksScreen}
        options={{
          tabBarLabel: 'Today\'s Task',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="calendar-check" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PracticeTheories"
        component={PracticeTheoriesScreen}
        options={{
          tabBarLabel: 'Practice Theories',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="book-open" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PracticeMCQ"
        component={PracticeMCQScreen}
        options={{
          tabBarLabel: 'Practice MCQ',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="form-textbox" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NLSCommunity"
        component={NLSCommunityScreen}
        options={{
          tabBarLabel: 'NLS Community',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="account-group" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
