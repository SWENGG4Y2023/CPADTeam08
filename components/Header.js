import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import PickImage from "./PickImage";

function Header() {
  const TITLE = "DepictionAI";
  return (
    <View>
      <StatusBar color="green" barStyle="light-content" />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title={TITLE} titleStyle={styles.title} />
      </Appbar.Header>
    </View>
  );
}

export default Header;
