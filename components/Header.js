import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Appbar, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import PickImage from './PickImage';


function Header() {

  return (
    <View>
        <StatusBar color="green" barStyle="light-content" />
        <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="AIGotEye" titleStyle={styles.title} />
        </Appbar.Header>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    appbar: {
      backgroundColor: 'tomato',
    },
    title: {
        color: 'white',
      }
  });

export default Header
