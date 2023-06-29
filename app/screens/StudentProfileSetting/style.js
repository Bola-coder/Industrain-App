import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  studentProfileSettings: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  backIcon: {
    backgroundColor: "#1B5A58",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 500,
  },

  skipText: {
    fontSize: 20,
  },

  stepIndicator: {
    marginVertical: 20,
  },

  form: {
    paddingTop: 20,
    height: "80%",
  },

  formHeader: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
  },

  formGroup: {
    paddingVertical: 20,
  },

  textInput: {
    padding: 12,
    backgroundColor: "#E3E9EC",
    // color: "#828282",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E3E9EC",
    borderRadius: 6,
    fontSize: 16,
    // Amdroid border styles
    elevation: 1,
    // IOS border styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  submitButton: {
    // position: "absolute",
    // bottom: "5%",
    marginTop: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#1B4A58",
    width: "100%",
    borderRadius: 6,
    // Amdroid border styles
    elevation: 1,
    // IOS border styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  submitButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFF",
  },

  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E9EC",
    marginVertical: 20,
    padding: 10,
    borderRadius: 6,
    // Amdroid border styles
    elevation: 1,
    // IOS border styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  uploadText: {
    marginLeft: 20,
    color: "#828282",
  },

  uploadTextMain: {
    fontSize: 16,
    color: "#828282",
    paddingVertical: 5,
  },

  uploadTextSub: {
    fontSize: 12,
    color: "#828282",
  },
});

export default styles;
