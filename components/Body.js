import React, { act } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import PickImage from "./PickImage";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import run from "../utilities/gemini/api";

function Body() {
  const [data, setData] = useState("Result will be displayed here."); // For showing result
  const [value, onChangeText] = useState(null); // For taking input
  const [image, setImage] = useState(null);
  const [btnState, setBtnState] = useState("Ask");

  const askai = async function () {
    setBtnState("Asking...");
    setData(await run(image, value));
    setBtnState("Ask");
    console.log(data);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <View
          style={{
            backgroundColor: "blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PickImage setImage={setImage} image={image} />
          <View>
            <ScrollView>
              <Text> {data} </Text>
            </ScrollView>

            <TextInput
              placeholder="Ask me anything..."
              editable
              multiline
              numberOfLines={4}
              maxLength={200}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
            <Button
              style={
                image == null || value == null
                  ? styles.disabled_button
                  : styles.button
              }
              mode="elevated"
              onPress={askai}
              disabled={image == null || value == null}
            >
              <Text style={{ color: "white" }}>{btnState}</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
  },
  innerContainer: {
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "red",
    flex: 1,
  },
  outerContainer: {
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "black",
    flex: 0.5,
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
  disabled_button: {
    width: Platform.OS === "web" ? "10%" : "25%",
    backgroundColor: "grey",
    margin: 4,
  },
  result: {
    padding: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  pickimage: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Body;
