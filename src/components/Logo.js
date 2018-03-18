import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { spacing } from '../style/styles';
import img from '../assets/logo.png';

const Logo = () => (
  <Image
    style={styles.logo}
    resizeMode="contain"
    source={img}
  />
);

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'stretch',
    marginBottom: spacing.md,
    width: undefined,
    height: 50
  },
});

export default Logo;
