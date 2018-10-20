import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="React Native Starter" />
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
