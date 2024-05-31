import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./CustomButton";

export default function PickImage({ image, setImage, disabled, setData }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    await ImagePicker.requestMediaLibraryPermissionsAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setData("");
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="Pick"
        onPress={pickImage}
        color={disabled ? "grey" : "tomato"}
        style={styles.button}
        disabled={disabled}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
