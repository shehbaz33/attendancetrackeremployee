import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import fetchFonts from "./useFonts";
import Login from "./screens/Login";
import colors from "./assets/colors/colors";
import Attendance from "./screens/Attendance";
import Profile from "./screens/Profile";
import Leave from "./screens/Leave";
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const loadFont = async () => {
    await fetchFonts();
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setDataLoaded(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
