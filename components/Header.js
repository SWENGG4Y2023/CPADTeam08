import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import PickImage from "./PickImage";

function Header() {
  const TITLE = "AIGotEYE:))";
  return (
    <View>
      <StatusBar color="green" barStyle="light-content" />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title={TITLE} titleStyle={styles.title} />
      </Appbar.Header>
    </View>
  );
}

// styling the header
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    // setting the bg color
    backgroundColor: "tomato",
  },
  // setting the title color as white
  title: {
    color: "white",
  },
});


export default Header;
