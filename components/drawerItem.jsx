// components/drawerItem.jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../constants/Colors';
import styles from "./styles";

const DrawerItem = (props) => {
    const { iconName, text, pro, notification, navigation } = props;

    const [isEnable, setIsEnable] = useState(false);
    const toggleSwitch = () => setIsEnable((prev) => !prev);

    const handlePress = () => {
        if (text === 'Settings') {
            navigation.navigate('Settings');
        } else if (text === 'Logout') {
            navigation.navigate('Login'); // Navigate to LoginScreen on Logout
        }
        // Other items should not navigate
    };

    return (
        <TouchableOpacity disabled={notification} onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.iconContainer, { backgroundColor: pro ? Colors.primary : Colors.secondary }]}>
                        <Icon name={iconName} size={30} color={pro ? Colors.secondary : Colors.primary} />
                    </View>
                    <Text style={[styles.text, { fontWeight: pro ? 'bold' : '500' }]}>{text}</Text>
                </View>
                <View>
                    {notification ? 
                        <Switch 
                            trackColor={{ false: Colors.secondary, true: Colors.primary }}
                            thumbColor={isEnable ? Colors.secondary : Colors.primary}
                            ios_backgroundColor={Colors.secondary}
                            onValueChange={toggleSwitch}
                            value={isEnable}
                        />
                    : 
                    <Icon name="chevron-right" size={25} color={Colors.primary} /> }
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DrawerItem;
