import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../style/styles';

const CreateListScreen = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  }
});

export default CreateListScreen;
