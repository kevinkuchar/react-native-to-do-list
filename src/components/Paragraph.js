import React from 'react';
import { StyleSheet } from 'react-native';
import { spacing, colors, fonts } from '../style/styles';
import AppText from './AppText';

const Paragraph = ({ children }) => (
  <AppText style={styles.paragraph}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  paragraph: {
    color: colors.textLight,
    fontSize: fonts.md,
    textAlign: 'center',
    lineHeight: spacing.lg,
    marginBottom: spacing.md
  }
});

export default Paragraph;
