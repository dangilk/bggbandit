import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import GameCarouselItem from './GameCarouselItem';
import styles from '../styles/index.style';
import { sliderWidth, itemWidth } from '../styles/SliderEntry';
import gameSuggestions from '../actions/actions'

class GameCarousel extends Component {
  render () {
     items = this.props.games.map((entry, index) =>
            <GameCarouselItem
              key={`carousel-entry-${index}`}
              even={(index + 1) % 2 === 0}
              {...entry}
            />
    );
        return (
          <Carousel
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            enableMomentum={true}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={2500}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContainer}
            showsHorizontalScrollIndicator={false}
            snapOnAndroid={true}
            removeClippedSubviews={false}
            >
                {items}
            </Carousel>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      games: state.gameSuggestions.games
    };
};
export default connect(mapStateToProps)(GameCarousel);
