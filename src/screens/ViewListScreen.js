import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewListScreen extends React.Component {
    static navigationOptions = {
      title: 'Is this even right?'
    };

    render() {
      return (
        <View style={styles.container}>
          <Text>View List Screen</Text>
          <Button
            title="Go to Select List Screen"
            onPress={() => this.props.navigation.navigate('SelectList')}
          />
        </View>
      );
    }
}

export default ViewListScreen;
