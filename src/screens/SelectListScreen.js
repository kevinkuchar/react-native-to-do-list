import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Container from '../components/Container';
import Content from '../components/Content';
import AccentButton from '../components/AccentButton';
import ListService from './../data/services/ListService';
import { colors } from '../style/colors.js';

@inject('ListStore')
@observer
class SelectListScreen extends Component {
  static navigationOptions = {
    title: 'Try It Out Lol'
  };

  componentWillMount() {
    ListService.get();
  }

  renderStuff= () => {
    const { lists } = this.props.ListStore;
    if (!lists.length) {
      return <Text>Loading</Text>;
    }

    return lists.map(list => (
      <Text key={list.id}>{list.list_name}</Text>
    ));
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderStuff()}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});

export default SelectListScreen;
