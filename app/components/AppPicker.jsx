import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

const AppPicker = ({ items, bgColor, prompt, onPickerValueChange }) => {
  const [selectedItem, setSelectedItem] = useState();

  // useEffect(() => {
  //   onPickerValueChange(items[0].value);
  // }, []);

  const handleChange = (itemValue, itemIndex) => {
    if (itemValue !== null) {
      onPickerValueChange(itemValue);
      setSelectedItem(itemValue);
    }
  };

  return (
    <Picker
      selectedValue={selectedItem}
      // prompt={prompt}
      onValueChange={handleChange}
      style={{
        alignSelf: "center",
        width: "100%",
        backgroundColor: bgColor ? bgColor : "#F2F2F2",
        borderRadius: 10,
        marginTop: 10,
      }}
      //   mode="dropdown"
    >
      <Picker.Item label={prompt} value={null} key={-1} />
      {/* Title/label item */}
      {items.map((item, index) => (
        // <View key={index}>
        <Picker.Item label={item.label} value={item.value} key={index} />
        // </View>
      ))}
    </Picker>
  );
};

export default AppPicker;
