import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

import Header from "./Header";
import Day from "./Day";
import Week from "./Week";
import {
  getCalendarWeeks,
  getMonthFromDate,
  getYearFromDate
} from "./dateUtils";

class DatePicker extends Component {
  static Week = Week;

  static propTypes = {
    date: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    date: new Date()
  };

  state = {
    year: getYearFromDate(this.props.date),
    month: getMonthFromDate(this.props.date)
  };

  changeMonth = delta => {
    if (delta > 0) {
      this.setState(state => {
        if (state.month === 11) {
          return {
            month: 0,
            year: state.year + 1
          };
        }
        return { month: state.month + 1 };
      });
    } else {
      this.setState(state => {
        if (state.month === 0) {
          return {
            month: 11,
            year: state.year - 1
          };
        }
        return {
          month: state.month - 1
        };
      });
    }
  };

  render() {
    const { year, month, date } = this.state;

    return (
      <View style={styles.calendar}>
        <Header
          month={month}
          year={year}
          onPrevPress={() => this.changeMonth(-1)}
          onNextPress={() => this.changeMonth(1)}
        />
        {getCalendarWeeks(year, month).map(week => (
          <View style={styles.week} key={week}>
            {week.map(day => (
              <Day key={day} day={day} date={date} />
            ))}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  week: {
    flexDirection: "row"
  }
});

export default DatePicker;
