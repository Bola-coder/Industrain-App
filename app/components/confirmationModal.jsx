import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";

const ConfirmationModal = ({
  visible,
  messsage,
  handleClose,
  handleConfirmation,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={handleClose}
      animationType="fade"
      onPress={handleClose}
    >
      <View style={styles.modelContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{messsage}</Text>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={handleConfirmation}
            >
              <Text style={styles.btnText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.rejectBtn]}
              activeOpacity={0.7}
              onPress={handleClose}
            >
              <Text style={styles.btnText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: "100%",
    width: "100%",
  },

  modalContent: {
    backgroundColor: "#FFaa00",
    backgroundColor: "#FFF",
    padding: 20,
    // minHeight: "30%",
    width: "80%",
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 5,
    position: "relative",
  },

  modalText: {
    fontSize: 20,
    textAlign: "center",
    // color: "#fff",
    fontWeight: 700,
    marginTop: 20,
  },

  btns: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#1B4A58",
    borderRadius: 4,
    width: "35%",
    alignItems: "center",
  },

  rejectBtn: {
    backgroundColor: "#828282",
  },

  btnText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 500,
  },
});

export default ConfirmationModal;
