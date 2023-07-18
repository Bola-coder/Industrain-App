import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Button, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const AppDatePicker = ({ label, styles, defaultValue, onDateChange }) => {
  // Function to format the date
  const formatDate = (date) => {
    if (date) {
      date = new Date(date);
      const day = date.getDate(); // Get the day of the month (1-31)
      const month = date.getMonth() + 1; // Get the month (0-11), add 1 to get the actual month (1-12)
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    }
    return date;
  };

  // State Variables
  const currDate = Date.now();
  const [date, setDate] = useState(new Date(currDate));
  // console.log(formatDate(defaultValue));
  const [formatedDate, setFormattedDate] = useState(formatDate(defaultValue));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setFormattedDate(formatDate(currentDate));
    onDateChange(selectedDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  //   useEffect(() => {

  //   }, [date]);

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.textInput} onPress={showDatepicker}>
        <Text>
          {label}: {formatedDate}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
          disabled={true}
        />
      )}
    </SafeAreaView>
  );
};

export default AppDatePicker;
