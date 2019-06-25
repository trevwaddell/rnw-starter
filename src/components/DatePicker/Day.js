import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Day extends Component {
  handlePress = () => console.log(this.props.day);

  render() {
    const { day } = this.props;
    const display = day.getDate();
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;

    return (
      <View style={styles.day}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text
            style={
              isWeekend ? styles.weekendTextColor : styles.weekdayTextColor
            }
          >
            {display}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  day: {
    width: `${100 / 7}%`,
    alignItems: "center",
    padding: 5,
    height: 45
  },
  weekendTextColor: {
    color: "lightgray"
  },
  weekdayTextColor: {
    color: "rgb(68,68,68)"
  }
});

export default Day;
