import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthSignupScreen from "../Containers/AuthSignupScreen";
import AuthLoginScreen from "../Containers/AuthLoginScreen";
import AuthWelcomeScreen from "../Containers/AuthWelcomeScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import AudioPlayerScreen from "../Containers/AudioPlayerScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    AudioPlayerScreen: { screen: AudioPlayerScreen },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "AudioPlayerScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

const LoginNav = createStackNavigator(
  {
    AuthSignupScreen: { screen: AuthSignupScreen },
    AuthLoginScreen: { screen: AuthLoginScreen },
    AuthWelcomeScreen: { screen: AuthWelcomeScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "AuthWelcomeScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
