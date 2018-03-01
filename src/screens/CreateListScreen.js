import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Container from '../components/Container';
import Content from '../components/Content';
import AccentButton from '../components/AccentButton';
import HighlightButton from '../components/HighlightButton';
import ListService from './../data/services/ListService';
import img from '../assets/logo.png';
import { colors } from '../style/colors.js';

@observer
class CreateListScreen extends Component {
  static navigationOptions = {
    title: 'Try It Out'
  };

  constructor() {
    super();
    this.state = { text: '' };
  }

  _onCreatePress = () => {

  }

  _onExistingPress = () => {
    this.props.navigation.navigate('SelectList');
  }

  render() {
    return (
      <Container>
        <Content>
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

          <AccentButton onPressButton={this._onCreatePress} copy="Create List" />
          <HighlightButton onPressButton={this._onExistingPress} copy="Select Existing List" />
          <KeyboardSpacer />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

export default CreateListScreen;
