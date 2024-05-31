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
import { useState } from "react";
import { Button } from "react-native-paper";

function Body() {
  const [data, setData] = useState("Result will be displayed here.");
  const [value, onChangeText] = useState("Useless Placeholder");

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={Styles.container}> */}
      <PickImage />
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
        <Button
          style={styles.button}
          mode="elevated"
          onPress={() => setData("This is the result.")}
        >
          <Text style={{ color: "white" }}>Ask</Text>
        </Button>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

// const Styles = StyleSheet.create({
//   container: {
//     margin: "1rem",
//     flex: 1,
//     // backgroundColor: "black",
//     flexDirection: "column", // inner items will be added vertically
//     justifyContent: "space-between", // will create the gutter between body and footer
//     gap: "8rem", // will create the gutter between body and footer
//     alignItems: "center", // will align the items in the center
//   },
//   button: {
//     width: Platform.OS === "web" ? "100%" : "50%",
//     backgroundColor: "tomato",
//     margin: 4,
//   },
//   textedit: {
//     width: Platform.OS === "web" ? "100%" : "100%",
//     borderColor: "tomato",
//     borderWidth: 1,
//     padding: 8,
//     margin: "1rem",
//     borderRadius: 50,
//     textAlign: "center",
//     padding: 10,
//     editable: true,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    // flex: 1,
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
