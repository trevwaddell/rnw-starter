//@flow
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Starter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  }
});

export default App;
