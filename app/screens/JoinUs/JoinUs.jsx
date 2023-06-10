import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const JoinUs = () => {
  return (
    <View style={styles.joinUs}>
      <Image
        source={require("./../../../assets/WebGroup.png")}
        style={styles.joinUsImage}
      />
      <View style={styles.joinUsContent}>
        <Text style={styles.joinUsContentText}>Join Us As</Text>
        <View style={styles.joinUsBtns}>
          <TouchableOpacity style={styles.joinUsBtn} activeOpacity={0.6}>
            <Text style={styles.joinUsBtnText}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.joinUsBtn, styles.joinUsBtnDark]}
            activeOpacity={0.6}
          >
            <Text style={[styles.joinUsBtnText, styles.joinUsBtnTextDark]}>
              Employer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JoinUs;
