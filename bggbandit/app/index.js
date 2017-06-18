import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn'
import Home from './components/Home'

const BggBanditApp = StackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home},
});
export default BggBanditApp
