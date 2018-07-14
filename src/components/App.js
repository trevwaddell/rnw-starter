import React from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Hello World</Text>
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
