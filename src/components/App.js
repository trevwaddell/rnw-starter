import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import DatePicker from "./DatePicker";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DatePicker />
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
