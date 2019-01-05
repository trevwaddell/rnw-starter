import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Web Starter</Text>
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
