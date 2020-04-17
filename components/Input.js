import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.Input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 1,
  },
});

export default Input;
