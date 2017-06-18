import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
        return (
            <View>
              <Text>Hello this is the sign in page</Text>
            </View>
        );
    }
}
