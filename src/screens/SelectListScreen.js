import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import img from '../assets/logo.png';
import { colors } from '../style/colors.js';
import AccentButton from '../components/AccentButton.js';
import ListService from './../data/services/ListService';

@inject('ListStore')
@observer
class SelectListScreen extends Component {
  static navigationOptions = {
    title: 'Try It Out - The List'
  };

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  _onPressButton = () => {
    ListService.get();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={img}
          />
          <View>
            <Text style={styles.paragraph}>
              To get started, enter the name of your list below.
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Create a new List"
            onChangeText={text => this.setState({ text })}
          />
          <AccentButton onPressButton={this._onPressButton} copy="Create List" />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  logo: {
    alignSelf: 'stretch',
    marginBottom: 18,
    width: undefined,
    height: 50
  },
  paragraph: {
    color: colors.textLight,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 27,
    marginBottom: 27
  },
  input: {
    padding: 18,
    backgroundColor: colors.textLight,
    alignSelf: 'stretch',
    width: undefined,
    borderRadius: 10,
    marginBottom: 18,
    fontSize: 18
  }
});

export default SelectListScreen;
