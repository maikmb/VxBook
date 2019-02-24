import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from '@expo/vector-icons'

import SchedulingScreen from './src/components/SchedulingScreen';
import MySchedulingScreen from './src/components/MySchedulingScreen';
import LoginScreen from './src/components/LoginScreen';

const getTabBarIcon = (navigation, focused, tintColor) => {  
  const { routeName } = navigation.state;
  console.log("Router Name: ", routeName);

  let IconComponent = Ionicons;
  let iconName;
  // if (routeName === 'Scheduling') {
  //   iconName = `ios-star${focused ? '' : '-outline'}`;
  // } else if (routeName === 'MyScheduling') {
  //   iconName = `animation${focused ? '' : '-outline'}`;
  // }

  // You can return any component that you like here!
  iconName = 'ios-star';
  return iconName;
  // return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const getTabName = (navigation) => {
  const { routeName } = navigation.state;
  console.log("Router Name: ", routeName);

  if (routeName === 'Scheduling') {
    return "Agendar";
  } else if (routeName === 'MyScheduling') {
    return "Meus Agendamentos";
  } else {
    return "Default Name";
  }

};

const tabRouterMap = {
  Scheduling: SchedulingScreen,
  MyScheduling: MySchedulingScreen
}; 

const tabDrawConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    // tabBarIcon: ({ focused, tintColor }) =>
    //   getTabBarIcon(navigation, focused, tintColor),

    title: getTabName(navigation)
  }),
  tabBarOptions: {
    activeTintColor: '#fd6c6b',
    inactiveTintColor: '#333333',
  }
};

const TabNavigator = createBottomTabNavigator(tabRouterMap,tabDrawConfig);

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Main: TabNavigator
}, {
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}