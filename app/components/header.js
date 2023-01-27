import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";
//import Fonts from "../../assets/Fonts"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}>ensom</Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.1,
    resizeMode : "contain",
  },
  title: {
    fontSize: 32,
    fontFamily: "SydneyBold",
    paddingLeft: 80,
    paddingRight: 80,
  },
  header: {
    flexDirection: "row",
    flex: 1, 
    //paddingLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    width : "80%",
    marginBottom: "40%"
  },
});

export default Header;
