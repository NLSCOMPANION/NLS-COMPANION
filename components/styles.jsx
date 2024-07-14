import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: Colors.secondary, 
        marginRight: 20,
        padding: 8,
        borderRadius: 10,
    },
    text: {
        color: Colors.primary,
        fontSize: SIZES.h2,
    }
});

export default styles;
