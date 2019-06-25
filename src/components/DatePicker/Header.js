import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft, ArrowRight } from "./icons";

import { MONTHS, WEEKDAYS } from "./constants";

const Arrow = ({ symbol, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.arrow}>
    {symbol}
  </TouchableOpacity>
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
          <Arrow
            symbol={
              <span style={{ fontSize: 30, fontWeight: "bold" }}>&#8592;</span>
            }
            onPress={onPrevPress}
          />
          <View style={styles.monthYear}>
            <Text style={styles.month}>{MONTHS[month]}</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.year}>{year}</Text>
          </View>
          <Arrow
            symbol={
              <span style={{ fontSize: 30, fontWeight: "bold" }}>&#8594;</span>
            }
            onPress={onNextPress}
          />
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
  arrow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  arrowText: {},
  monthYear: {
    flexDirection: "row",
    flex: 5,
    alignItems: "center",
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
