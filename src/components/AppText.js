import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fonts } from '../style/styles';

const AppText = ({ bold, style, children }) => {
  const textStyle = {
    ...StyleSheet.flatten(bold ? styles.bold : styles.light),
    ...StyleSheet.flatten(style)
  };

  return (
    <Text style={textStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  light: {
    fontFamily: fonts.light
  },
  bold: {
    fontFamily: fonts.bold
  },
});

export default AppText;
