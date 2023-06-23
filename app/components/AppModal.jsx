import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";
import AppPicker from "./AppPicker";
import { TouchableOpacity } from "react-native";

const AppModal = ({ visible, setVisible }) => {
  const categoryDropDown = [
    { label: "Engineering", value: "enginerring" },
    { label: "Science", value: "science" },
    { label: "Art", value: "art" },
    { label: "Finance", value: "finance" },
    { label: "Agriculture", value: "agriculture" },
  ];
  const courseDropDown = [
    { label: "Engineering", value: "enginerring" },
    { label: "Science", value: "science" },
    { label: "Art", value: "art" },
    { label: "Finance", value: "finance" },
    { label: "Agriculture", value: "agriculture" },
  ];
  const locationDropDown = [
    { label: "Engineering", value: "enginerring" },
    { label: "Science", value: "science" },
    { label: "Art", value: "art" },
    { label: "Finance", value: "finance" },
    { label: "Agriculture", value: "agriculture" },
  ];
  const durationDropDown = [
    { label: "Engineering", value: "enginerring" },
    { label: "Science", value: "science" },
    { label: "Art", value: "art" },
    { label: "Finance", value: "finance" },
    { label: "Agriculture", value: "agriculture" },
  ];
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        console.log("Modal has been closed");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Set Filter</Text>
          <View style={styles.modelContent}>
            <View style={styles.dropDownContainer}>
              <Text>Categories</Text>
              <AppPicker items={categoryDropDown} />
            </View>
            <View style={styles.dropDownContainer}>
              <Text>Course</Text>
              <AppPicker items={courseDropDown} />
            </View>
            <View style={styles.dropDownContainer}>
              <Text>Location</Text>
              <AppPicker items={locationDropDown} />
            </View>
            <View style={styles.dropDownContainer}>
              <Text>Duration</Text>
              <AppPicker items={durationDropDown} />
            </View>
            <TouchableOpacity
              style={styles.modalBtn}
              activeOpacity={0.7}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.modalBtnText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modal: {
    width: "100%",
    height: "70%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 500,
    paddingVertical: 10,
  },

  modelContent: {
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 20,
  },

  dropDownContainer: {
    marginBottom: 15,
  },

  modalBtn: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#1B4A58",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 20,
  },

  modalBtnText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
});
