import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SettingsScreen from '../screens/SettingsScreen'; 
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'; 
import DrawerScreen from '../screens/drawer'; // Ensure this imports correctly
import BottomNav from '../screens/BottomNav'; 
import Colors from '../constants/Colors';
import { SIZES } from '../constants/theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerScreen {...props} />}
    drawerStyle={{ width: SIZES.width - 60 }}
  >
    <Drawer.Screen
      name="BottomNav"
      component={BottomNav}
      options={{
        headerTitle: 'NLS Companion',
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerTitle: 'Settings',
      }}
    />
  </Drawer.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        color: Colors.secondary,
      },
    }}
  >
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Onboard" component={OnboardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="DashboardStack" component={DashboardStack} options={{ headerShown: false }} />
    <Stack.Screen name="forgot" component={ForgotPasswordScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <MainStack />
);

export default MainNavigator;
