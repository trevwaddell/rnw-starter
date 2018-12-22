import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Hello } from "./HelloTs";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Web Starter</Text>
        <Hello compilier="typescript" framework="react" />
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
