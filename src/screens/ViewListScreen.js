import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Button } from 'react-native';

@inject('ListStore')
@observer
class ViewListScreen extends React.Component {
  componentDidMount() {
    const list = this.props.ListStore.currentList;
    console.log(list.list_name);
    this.props.navigation.setParams({
      title: list.list_name
    });
  }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewListScreen;
