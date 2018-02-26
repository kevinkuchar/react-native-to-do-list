import React from 'react';
import { StackNavigator } from 'react-navigation';
import SelectListScreen from './src/screens/SelectListScreen';
import ViewListScreen from './src/screens/ViewListScreen';
import { colors } from './src/style/colors.js';

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
    return <RootStack />;
  }
}
