//@flow
import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  text: string
};

const Header = (props: Props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#444"
  }
});

export default Header;
