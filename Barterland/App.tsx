import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupWithPhoneScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>&lt;</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Sign up with phone number</Text>

      <Text style={styles.label}>Phone Number</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="123"
          maxLength={3}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputRight]}
          placeholder="Enter phone number"
          maxLength={10}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#FFF8F0",
    marginTop: 40,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
  },
  signupText: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 0,
    fontSize: 40,
    textAlign: 'center',
    color: '#1F1F1F',
    fontWeight: 'bold'
  },
  label: {
    fontSize: 24,
    marginTop: 40,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  input: {
    height: 60,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputLeft: {
    width: "20%",
    marginRight: 5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  inputRight: {
    width: "75%",
    marginLeft: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  submitButton: {
    width: "100%",
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#FFC905',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupWithPhoneScreen;
