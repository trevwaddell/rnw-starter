import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft, ArrowRight } from "./icons";

import { MONTHS, WEEKDAYS } from "./constants";

const Arrow = ({ symbol }) => (
  <View style={styles.arrow}>
    <Text style={styles.arrowText}>{symbol}</Text>
  </View>
);

class Header extends Component {
  static propTypes = {
    onNextProps: PropTypes.func,
    onPrevPress: PropTypes.func
  };

  render() {
    const { month, year, onPrevPress, onNextPress } = this.props;
    return (
      <Fragment>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPrevPress}>
            <Arrow symbol={<ArrowLeft />} />
          </TouchableOpacity>
          <View style={styles.monthYear}>
            <Text style={styles.month}>{MONTHS[month]}</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.year}>{year}</Text>
          </View>
          <TouchableOpacity onPress={onNextPress}>
            <Arrow symbol={<ArrowRight />} />
          </TouchableOpacity>
        </View>
        <View style={styles.week}>
          {WEEKDAYS.map(day => (
            <View style={styles.weekday} key={day}>
              <Text style={styles.weekdayText}>{day}</Text>
            </View>
          ))}
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    marginBottom: 5,
    marginTop: 5
  },
  arrow: { flexGrow: 1, alignItems: "center" },
  arrowText: {
    color: "rgb(249,99,2)",
    fontWeight: "bold",
    fontSize: 20
  },
  monthYear: {
    flexDirection: "row",
    flexGrow: 5,
    justifyContent: "center"
  },
  month: { fontWeight: "bold", fontSize: 20 },
  year: { fontSize: 20 },
  week: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10
  },
  weekday: {
    flexGrow: 1,
    alignItems: "center"
  },
  weekdayText: { fontWeight: "500", color: "rgba(68,68,68,.5)", fontSize: 14 }
});

export default Header;
