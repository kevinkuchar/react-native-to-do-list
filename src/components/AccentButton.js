import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import AppText from './AppText';
import { colors } from '../style/styles';

const PRIMARY_STYLES = {
  backgroundColor: colors.accent,
  borderBottomColor: colors.accentDark,
  borderRightColor: colors.accentDark
};

const SECONDARY_STYLES = {
  backgroundColor: colors.highlight,
  borderBottomColor: colors.highlightDark,
  borderRightColor: colors.highlightDark
};

const AccentButton = ({ copy, onPressButton, type }) => {
  const buttonStyle = {
    ...type === 'primary' ? PRIMARY_STYLES : SECONDARY_STYLES,
    ...StyleSheet.flatten(styles.button)
  };

  return (
    <TouchableWithoutFeedback onPress={onPressButton}>
      <View style={buttonStyle}>
        <AppText style={styles.buttonText}>{ copy }</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: undefined,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 10,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    flex: 1
  },
  buttonText: {
    fontSize: 20,
    padding: 18,
    color: colors.textLight
  }
});

export default AccentButton;
