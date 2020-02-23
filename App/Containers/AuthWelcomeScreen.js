import React, { Component } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { Images } from "../Themes";
import RoundedButton from "../Components/RoundedButton";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/AuthWelcomeScreenStyle";
import { from } from "seamless-immutable";

class AuthWelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={Images.wave}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.centered}>
            <Text style={styles.titleText}>Welcome To Ambiance</Text>
            <Text style={styles.subtitle}>
              Ambiance is all about creating the soundscape for chilling or on the grind.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <RoundedButton>Get Started</RoundedButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthWelcomeScreen);
