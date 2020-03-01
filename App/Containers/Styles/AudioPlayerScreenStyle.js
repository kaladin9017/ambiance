import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles , Colors, Fonts} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.black,
    height: "100%",
    alignItems: "center",
  },
  titleText: {
    ...Fonts.style.h1,
    fontSize: 32,
    marginTop: Metrics.navBarHeight,
    color: Colors.offwhite,
    width: Metrics.screenWidth / 1.2,
  },
})
