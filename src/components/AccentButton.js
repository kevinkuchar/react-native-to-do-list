import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors } from '../style/colors.js';

const AccentButton = ({ copy, onPressButton }) => (
  <TouchableWithoutFeedback onPress={onPressButton}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{ copy }</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  button: {
    width: undefined,
    backgroundColor: colors.accent,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: colors.accentDark,
    borderRightWidth: 3,
    borderRightColor: colors.accentDark
  },
  buttonText: {
    fontSize: 18,
    padding: 18,
    color: colors.textLight
  }
});

export default AccentButton;
