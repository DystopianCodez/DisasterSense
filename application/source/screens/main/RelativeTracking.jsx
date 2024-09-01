import MapView from "react-native-maps";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

function RelativeTrackingScreen() {
  const [fontsLoaded] = useFonts({
    "Teacher-Regular": require("../../../assets/fonts/Teachers-Regular.ttf"),
    "Teacher-Medium": require("../../../assets/fonts/Teachers-Medium.ttf"),
    "Teacher-SemiBold": require("../../../assets/fonts/Teachers-SemiBold.ttf"),
    "Teacher-ExtraBold": require("../../../assets/fonts/Teachers-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <View style={styles.relativesContainerWrapper}>
        <View style={styles.relativesContainerParent}>
          <Text style={styles.heading}>Family Members</Text>
        </View>
      </View>
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  relativesContainerWrapper: {
    // backgroundColor: "orange",
    height: "10%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 30,
  },
  relativesContainerParent: {
    backgroundColor: "black",
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    // margin: 20,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontFamily: "Teacher-SemiBold",
    color: "white",
    fontSize: 30,
  },
});

export default RelativeTrackingScreen;
