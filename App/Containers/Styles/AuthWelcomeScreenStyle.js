import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics, ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.black
  },
  scrollViewContainer: {
    height: "100%",
    marginTop: Metrics.navBarHeight
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain",
    marginBottom: Metrics.smallMargin
  },
  centered: {
    alignItems: "center"
  },
  subtitle: {
    color: Colors.offwhite,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
    textAlign: "center",
    width: Metrics.screenWidth / 1.2
  },
  titleText: {
    ...Fonts.style.h1,
    fontSize: 32,
    marginTop: Metrics.smallMargin,
    color: Colors.offwhite,
    width: Metrics.screenWidth / 1.2,
  },
  buttonContainer: {
    width: Metrics.screenWidth,
    height: 150,
    position: "absolute",
    bottom: 0
  }
});
