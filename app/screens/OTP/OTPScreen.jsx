import {
  Image,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style";
import AuthButton from "../../components/AuthButton";

const OTPScreen = ({ navigation }) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState(null);
  const [pin2, setPin2] = useState(null);
  const [pin3, setPin3] = useState(null);
  const [pin4, setPin4] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (pin1 && pin2 && pin3 && pin4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [pin1, pin2, pin3, pin4]);

  return (
    <KeyboardAvoidingView style={styles.otp} behavior="padding">
      <View>
        <Image
          source={require("./../../../assets/OTPImage.png")}
          style={styles.otpImage}
        />
      </View>
      <View style={styles.otpHeader}>
        <Text style={styles.otpHeaderTextMain}>OTP Verfication</Text>
        <Text style={styles.otpHeaderTextSub}>
          Please enter the 5 digits code sent to your email.
        </Text>
      </View>
      <View style={styles.otpInputContainer}>
        <View style={styles.otpInputGroup}>
          <TextInput
            ref={pin1Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChange={(pin1) => {
              setPin1(pin1);
              if (pin1 !== null) {
                pin2Ref.current.focus();
              }
            }}
            style={styles.otpInput}
          />
        </View>
        <View style={styles.otpInputGroup}>
          <TextInput
            ref={pin2Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChange={(pin2) => {
              setPin2(pin2);
              if (pin2 !== null) {
                pin3Ref.current.focus();
              }
            }}
            style={styles.otpInput}
          />
        </View>
        <View style={styles.otpInputGroup}>
          <TextInput
            ref={pin3Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChange={(pin3) => {
              setPin3(pin3);
              if (pin3 !== null) {
                pin4Ref.current.focus();
              }
            }}
            style={styles.otpInput}
          />
        </View>
        <View style={styles.otpInputGroup}>
          <TextInput
            ref={pin4Ref}
            keyboardType="number-pad"
            maxLength={1}
            onChange={(pin4) => {
              setPin4(pin4);
              if (pin4 !== null) {
                pin1Ref.current.focus();
              }
            }}
            style={styles.otpInput}
          />
        </View>
      </View>
      <View style={styles.otpFooter}>
        <Text style={styles.otpFooterTextMain}>
          Didn't receive the OTP?{" "}
          <Text style={styles.otpFooterTextSub}>Resend OTP</Text>
        </Text>
      </View>
      <View style={styles.btn}>
        <AuthButton
          text={"Verify"}
          disabled={disabled}
          onPress={() => {
            navigation.navigate("JoinUS");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;
