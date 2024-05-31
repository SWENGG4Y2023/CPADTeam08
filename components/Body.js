import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
} from "react-native";
import PickImage from "./PickImage";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import run from "../utilities/gemini/api";

function Body() {
  const [data, setData] = useState("Result will be displayed here."); // For showing result
  const [value, onChangeText] = useState("Useless Placeholder"); // For taking input
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log("image updated:");
    // console.log(image);
  }, [image]);

  const askai = async function () {
    console.log(image);
    console.log(value);
    setData(await run(image, value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <PickImage setImage={setImage} image={image} />
      {/* <PickImage setImage={setImage} image={image} /> */}
      <Text> {data} </Text>
      <View style={styles.innerContainer}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={200}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.textedit}
        />
        <Button style={styles.button} mode="elevated" onPress={askai}>
          <Text style={{ color: "white" }}>Ask</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textedit: {
    width: Platform.OS === "web" ? "50%" : "90%",
    borderColor: "tomato",
    borderWidth: 1,
    padding: 8,
    margin: 8,
    borderRadius: 50,
    textAlign: "center",
  },
  button: {
    width: Platform.OS === "web" ? "10%" : "25%",
    backgroundColor: "tomato",
    margin: 4,
  },
});
export default Body;
