import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 8,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.grey,
    justifyContent: "center",
    borderColor: Colors.snow,
    borderWidth: Metrics.buttonBorderWidth
  },
  buttonText: {
    color: Colors.snow,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
});
