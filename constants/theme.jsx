const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#000000',  // 99, 57, 116
    lightPurple: '#000000',
    grey: '#585656',
    lightGrey: '#DCDADD',
    white: '#FFFFFF',
    title: '#000000',
};

export const SIZES = {
    h1: 20,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,

    width,
    height,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};

