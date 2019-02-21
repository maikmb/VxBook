import { StackNavigator } from "react-navigation";

import Login from '../components/Login'
import Home from '../components/Home';

const navigationOptions = {
    //title: ({state}) => `${state.params.username}'s Profile'`,
}

const routeConfiguration  = {
    Home: { screen: Home },
    Login: { screen: Login },
}

const stackNavigatorConfiguration = {
    headerMode:'none',
    // initialRouteName:'Login'        
}

const AppNavigator = StackNavigator(
    routeConfiguration,
    stackNavigatorConfiguration
);

export default AppNavigator;