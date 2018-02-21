import React from 'react';
import { StackNavigator } from 'react-navigation';
import SelectListScreen from './src/screens/SelectListScreen';
import ViewListScreen from './src/screens/ViewListScreen';

const RootStack = StackNavigator(
  {
    ViewList: {
      screen: ViewListScreen,
    },
    SelectList: {
      screen: SelectListScreen,
    },
  },
  {
    initialRouteName: 'ViewList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
