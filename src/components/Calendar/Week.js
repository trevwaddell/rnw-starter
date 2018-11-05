import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

import Day from "./Day";

import { WEEKDAYS } from "./constants";
import { getCalendarWeekDays } from "./dateUtils";

export default ({ date, onDateChange }) => (
  <Fragment>
    <View style={styles.week}>
      {WEEKDAYS.map(day => (
        <View style={styles.weekdayContainer} key={day}>
          <Text style={styles.weekdayText}>{day}</Text>
        </View>
      ))}
    </View>
    <View style={styles.week}>
      {getCalendarWeekDays(date).map(day => (
        <Day key={day} day={day} handleDateChange={onDateChange} />
      ))}
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  weekdayContainer: {
    display: "flex",
    width: `${100 / 7}%`,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center"
  },
  weekdayText: {
    fontWeight: "500",
    color: "rgba(68,68,68,.5)",
    fontSize: 14
  },
  week: { display: "flex" }
});
