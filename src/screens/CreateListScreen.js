import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet, View, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Container from '../components/Container';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import AccentButton from '../components/AccentButton';
import Logo from '../components/Logo';
import ListService from './../data/services/ListService';
import { colors, spacing, fonts } from '../style/styles';

@inject('ListStore')
@observer
class CreateListScreen extends Component {
  static navigationOptions = {
    title: 'Create List'
  };

  constructor() {
    super();
    this.state = { text: '' };
  }

  _onCreateSuccess = (id) => {
    const { ListStore, navigation } = this.props;
    if (id) {
      ListStore.updateActiveList(id);
      navigation.navigate('ViewList');
    }
  }

  _onCreatePress = () => {
    ListService.createList({ list_name: this.state.text })
      .then(this._onCreateSuccess);
  }

  _onExistingPress = () => {
    this.props.navigation.navigate('SelectList');
  }

  _onChangeText = (text) => {
    this.setState({ text });
  }

  render() {
    return (
      <Container>
        <Content>
          <Logo />
          <View>
            <Paragraph>
              To get started, enter the name of your list below.
            </Paragraph>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Create a new List"
            onChangeText={this._onChangeText}
            value={this.state.text}
          />
          <View style={styles.buttonList}>
            <AccentButton type="secondary" onPressButton={this._onExistingPress} copy="Select List" />
            <View style={styles.buttonSpacer} />
            <AccentButton type="primary" onPressButton={this._onCreatePress} copy="Create List" />
          </View>
          <KeyboardSpacer />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: spacing.md,
    backgroundColor: colors.bgLight,
    alignSelf: 'stretch',
    width: undefined,
    borderRadius: 10,
    marginBottom: spacing.md,
    fontSize: fonts.md,
    fontFamily: fonts.light
  },
  buttonSpacer: {
    width: spacing.sm
  },
  buttonList: {
    flexDirection: 'row'
  }
});

export default CreateListScreen;
