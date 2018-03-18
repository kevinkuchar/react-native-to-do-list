import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import AppText from './../components/AppText';
import Paragraph from '../components/Paragraph';
import Container from '../components/Container';
import Content from '../components/Content';
import ListService from './../data/services/ListService';
import { colors } from '../style/styles';

@inject('ListStore')
@observer
class SelectListScreen extends Component {
  static navigationOptions = {
    title: 'Select List'
  };

  componentWillMount() {
    ListService.get();
  }

  _onListItemPress(id) {
    const { updateActiveList } = this.props.ListStore;
    return () => {
      updateActiveList(id);
      this.props.navigation.navigate('ViewList');
    };
  }

  renderLists= () => {
    const { lists } = this.props.ListStore;
    if (!lists.length) {
      return <AppText>Loading</AppText>;
    }

    return lists.map(list => (
      <View style={styles.listItemContainer} key={list.id}>
        <TouchableOpacity onPress={this._onListItemPress(list.id)}>
          <AppText style={styles.listItem}>
            {list.list_name}
          </AppText>
        </TouchableOpacity>
      </View>
    ));
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.placeHolder1} />
          <View style={styles.selectViewContainer}>
            <Paragraph>
              Select an existing list to view it.
            </Paragraph>
            <View style={styles.listContainer}>
              <ScrollView>
                {this.renderLists()}
              </ScrollView>
            </View>
          </View>
          <View style={styles.placeHolder2} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  placeHolder1: {
    flex: 1,
  },
  placeHolder2: {
    flex: 2,
  },
  selectViewContainer: {
    alignSelf: 'stretch',
    flex: 3
  },
  listContainer: {
    backgroundColor: 'white',
  },
  listItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listItem: {
    padding: 18,
    fontSize: 18,
    textAlign: 'center',
  }
});

export default SelectListScreen;
