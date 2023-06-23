import { View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const AppPicker = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <Picker
      selectedValue={selectedItem}
      onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
      style={{
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        marginTop: 10,
      }}
      //   mode="dropdown"
    >
      {items.map((item, index) => (
        // <View key={index}>
        <Picker.Item label={item.label} value={item.value} key={index} />
        // </View>
      ))}
    </Picker>
  );
};

export default AppPicker;
