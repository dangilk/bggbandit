import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import GameCarousel from './GameCarousel';

export default class Home extends Component {
  render() {
        return (
            <View>
              <GameCarousel/>
            </View>
        );
    }
}
