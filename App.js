import React from 'react';
import { Provider } from 'mobx-react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CreateListScreen from './src/screens/CreateListScreen';
import ViewListScreen from './src/screens/ViewListScreen';
import SelectListScreen from './src/screens/SelectListScreen';
import { colors } from './src/style/styles';
import ListStore from './src/data/stores/ListStore';
import { Font } from 'expo';
import OpenSansLight from './src/assets/fonts/OpenSans-Light.ttf';
import OpenSansBold from './src/assets/fonts/OpenSans-Bold.ttf';

const NavigatorStyle = {
  initialRouteName: 'CreateList',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.headerBg
    },
    headerTintColor: colors.textLight
  }
};

const NavigatorRoutes = {
  ViewList: {
    screen: ViewListScreen,
    navigationOptions: {
      header: ({ state }) => {
        return { title: state.params && state.params.title };
      },
    },
  },
  CreateList: {
    screen: CreateListScreen
  },
  SelectList: {
    screen: SelectListScreen
  }
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'open-sans-light': OpenSansLight,
      'open-sans-bold': OpenSansBold
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }

  render() {
    const RootStack = StackNavigator(NavigatorRoutes, NavigatorStyle);

    return (
      <Provider ListStore={ListStore}>
        {this.state.fontLoaded ? (<RootStack />) : <View />}
      </Provider>
    );
  }
}
