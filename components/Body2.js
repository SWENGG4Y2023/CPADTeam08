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
import run from "../utilities/gemini/api.mjs";

function Body2() {
  const [data, setData] = useState(""); // For showing result
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
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={150}>
        <View style={{ height: "100%", width: "100%" }}>
          <View style={{ flex: 5 }}>
            <PickImage
              setImage={setImage}
              image={image}
              disabled={btnState == "Asking..."}
              setData={setData}
            />
          </View>
          <View style={{ flex: 5, alignItems: "center" }}>
            <View
              style={{
                // backgroundColor: "tomato",
                height: "65%",
                width: "100%",
                padding: 8,
              }}
            >
              <ScrollView>
                <Text> {data} </Text>
              </ScrollView>
            </View>
            <View
              style={{
                // backgroundColor: "pink",
                height: "20%",
                width: "95%",
                padding: 10,
                // alignItems: "center",
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "tomato",
                marginHorizontal: 120,
              }}
            >
              <TextInput
                placeholder="Ask me anything..."
                editable
                multiline
                numberOfLines={2}
                maxLength={200}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              />
            </View>
            <View
              style={{
                // backgroundColor: "teal",
                marginVertical: 2,
              }}
            >
              <Button
                style={
                  image == null || value == null || btnState === "Asking..."
                    ? styles.disabled_button
                    : styles.button
                }
                mode="elevated"
                onPress={askai}
                disabled={
                  image == null || value == null || btnState === "Asking..."
                }
              >
                <Text style={{ color: "white" }}>{btnState}</Text>
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "black",
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
});

export default Body2;
