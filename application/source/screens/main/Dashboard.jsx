import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function DashboardScreen() {
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
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}></View>
          <View style={styles.header}>
            <Text style={styles.heading}>Good Morning, Hector</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Text>
          </View>
        </View>
        <View style={styles.wearablesContainer}>
          <View style={styles.wearablesContainerHeader}>
            <Text>Your Technologies</Text>
          </View>
          <View style={styles.wearablesBody}>
            <View style={styles.wearablesBodyIcon}></View>
            <View>
              <Text style={styles.wearableText}>Hector's Smart Watch</Text>
              <View style={styles.watchContainerActivity}>
                <View style={styles.watchContainerActiveIcon}></View>
                <Text style={styles.watchContainerActivityText}>Active</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.applications}></View>
      </View>
      <View style={styles.navigator}>
        <Text>H</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "teal",
  },
  heading: {
    fontFamily: "Teacher-SemiBold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  paragraph: {
    fontFamily: "Teacher-Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  profile: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    borderRadius: "50%",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },

  wearablesContainer: {
    flex: 0.5,
  },
  applications: {
    flex: 1,
  },
  navigator: {
    backgroundColor: "#01204e",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10%",
  },
  containerBody: {
    flex: 1,
    margin: 20,
    marginVertical: 80,
  },

  wearablesBody: {
    backgroundColor: "#01204e",
    // flex: 0.3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  wearablesBodyIcon: {
    height: 40,
    width: 40,
    backgroundColor: "#000",
    borderRadius: "50%",
    marginRight: 10,
  },
  wearableText: {
    fontFamily: "Teacher-SemiBold",
    fontSize: 18,
    color: "#fff",
  },
  watchContainerActiveIcon: {
    backgroundColor: "lightgreen",
    height: 20,
    width: 20,
    borderRadius: "50%",
    marginRight: 8,
  },
  watchContainerActivity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  watchContainerActivityText: {
    color: "lightgreen",
  },
});

export default DashboardScreen;
