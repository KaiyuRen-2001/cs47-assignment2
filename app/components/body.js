import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";
import themes from "../../assets/Themes/themes";
//import { ImageBackground } from "react-native-web";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
  return (
    <View>
      <View style={styles.bodyBox}>
        <ImageBackground
          source={Profiles.mtl.image}
          style={styles.profileImg}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.profileName}>{Profiles.mtl.name}</Text>
          <Text style={styles.profileCaption}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
      </View>
      <View style={styles.audioBox}>
        <Text style={styles.audioCaption}>My hottest take</Text>
        <View style={styles.audioIconsBox}>
          <Image source={Icons.player.light} style={styles.bodyIcons} />
          <Image source={Icons.audioWave.light} style={styles.audiowaveImg} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    /*
    height: undefined,
    width: "95%",
    borderRadius: 20,
    aspectRatio: 1 / 1.05,
    padding: 8,
    justifyContent: "space-between",
    marginBottom: "25%",
    marginLeft: "8%"
    */
    height: windowHeight * 0.45,
    width: windowWidth * 0.8,
    resizeMode: "contain",
    
  },
  imageStyle: {
    borderRadius: 8,
  },
  bodyIcons: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
    paddingRight: 40,
    marginTop: "10%",
  },
  audiowaveImg: {
    marginBottom: "5%",
    height: windowWidth * 0.15,
    width: windowWidth * 0.65,
    resizeMode: "stretch",
    paddingLeft: 40,
    marginTop: "10%",
  },

  profileName: {
    position: "absolute",
    color: Themes.light.textSecondary,
    fontSize: 32,
    fontFamily: "Sydney",
    top: "10%",
    left: "8%",
    //textAlign: "left"
  },

  profileCaption: {
    position: "absolute",
    color: Themes.light.textSecondary,
    fontSize: 18,
    fontFamily: "Sydney",
    left: "8%",
    bottom: "8%",
  },
  audioCaption: {
    position: "absolute",
    color: Themes.light.text,
    fontSize: 32,
    fontFamily: "Sydney",
    left: "8%",
    bottom: "8%",
    marginBottom: "16%",
  },

  bodyBox: {
    //flexDirection: "row",
    //paddingLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    marginBottom: "3%",
  },
  audioBox: {
    flexDirection: "row",
    //paddingLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Themes.light.bg,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  audioIconsBox: {
    flexDirection: "row",
    //paddingLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Body;
