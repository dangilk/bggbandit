import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/SliderEntry';

export default class GameCarouselItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        yearPublished: PropTypes.number,
        image: PropTypes.string,
        even: PropTypes.bool
    };

    render () {
        const { name, yearPublished, image, even } = this.props;
        const uppercaseTitle = name ? (
            <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>{ name.toUpperCase() }</Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${name}'`); }}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    <Image
                      source={{ uri: image }}
                      style={styles.image}
                    />
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text style={[styles.subtitle, even ? styles.subtitleEven : {}]} numberOfLines={2}>{ yearPublished }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
