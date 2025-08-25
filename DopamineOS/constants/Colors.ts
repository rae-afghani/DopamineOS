/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

/****PRIMARY COLORS****/
const azure = '#4282aa';
const mediumAzure = '#175873';
const darkAzure = '#193046';
const green = '#8cb89f';
const paleTurqoise = '#fafffe';
const white = '#fff'

const tintColorLight = azure;
const tintColorDark = paleTurqoise;

export const Colors = {
  light: {
    text: darkAzure,
    background: paleTurqoise,
    tint: tintColorLight,
    icon: darkAzure,
    tabIconDefault: darkAzure,
    tabIconSelected: mediumAzure,
  },
  dark: {
    text: white,
    background: darkAzure,
    tint: tintColorDark,
    icon: mediumAzure,
    tabIconDefault: mediumAzure,
    tabIconSelected: azure,
  },
};



