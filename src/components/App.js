import React from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends React.Component {
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
