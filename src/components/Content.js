import React from 'react';
import { StyleSheet, View } from 'react-native';

const CreateListScreen = ({ children }) => (
  <View style={styles.content}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  }
});

export default CreateListScreen;
