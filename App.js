import React from 'react';
import { Provider } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import SelectListScreen from './src/screens/SelectListScreen';
import ViewListScreen from './src/screens/ViewListScreen';
import { colors } from './src/style/colors.js';
import ListStore from './src/data/stores/ListStore';

const NavigatorStyle = {
  initialRouteName: 'SelectList',
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
  },
  SelectList: {
    screen: SelectListScreen,
  }
};

const RootStack = StackNavigator(NavigatorRoutes, NavigatorStyle);

export default class App extends React.Component {
  render() {
    return (
      <Provider ListStore={ListStore}>
        <RootStack />
      </Provider>
    );
  }
}
