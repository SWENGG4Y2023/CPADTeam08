import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Body2 from "./components/Body2";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header style={{ backgroundColor: "#000" }} />
        {/* <Body /> */}
        <Body2></Body2>

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
