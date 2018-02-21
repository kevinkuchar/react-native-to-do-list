import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SelectListScreen extends Component {
  static navigationOptions = {
    title: 'SelectList'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Select a List Screen</Text>
        <Button
          title="Go to View List Screen"
          onPress={() => this.props.navigation.navigate('ViewList')}
          />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}

export default SelectListScreen;
