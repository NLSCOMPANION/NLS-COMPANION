// screens/drawer.jsx
import React from "react";
import { Image, ImageBackground, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import DrawerItem from '../components/drawerItem';

const DrawerScreen = ({ navigation }) => (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/logo1.png')} style={styles.imageBackground}>
            <View style={styles.topContainer}>
                <View style={styles.topDetails}>
                    <Image style={styles.profile} source={require('../assets/profile.jpeg')} />
                    <View>
                        <Text style={styles.name}>PossibleDeveloper</Text>
                        <View style={styles.row}>
                            <Icon name="map-marker" size={15} style={styles.icon} />
                            <Text style={styles.locationText}>Lagos, Nigeria</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <ScrollView>
            <View style={styles.itemContainer}>
                <DrawerItem iconName="book-open-variant" text="Daily RPC" pro />
                <DrawerItem iconName="book-open" text="Practice Theory" />
                <DrawerItem iconName="checkbox-multiple-marked-outline" text="Practice MCQ" />
                <DrawerItem iconName="file-document" text="Sample Draft" />
                <DrawerItem iconName="book" text="NLS Recommended Textbooks" />
                <View style={styles.line} />
                <DrawerItem iconName="bell-ring" text="Notification" notification />
                <DrawerItem iconName="cog" text="Settings" navigation={navigation} />
                <DrawerItem iconName="logout" text="Logout" navigation={navigation} />
            </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
            <Text style={styles.appName}>NLS COMPANION</Text>
            <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
    </View>
);

export default DrawerScreen;
