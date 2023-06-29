import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Button, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const AppDatePicker = ({ label, styles, onDateChange }) => {
  const currDate = Date.now();
  const [date, setDate] = useState(new Date(currDate));
  const [formatedDate, setFormattedDate] = useState("");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    const day = date.getDate(); // Get the day of the month (1-31)
    const month = date.getMonth() + 1; // Get the month (0-11), add 1 to get the actual month (1-12)
    const year = date.getFullYear();
    setFormattedDate(`${year}-${month}-${day}`);
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
