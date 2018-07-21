import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class GettingStated extends React.Component {
  render() {
    return (
      <View
        style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            The Developers Conference 2018!
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      // { rotateY: 50 },
      // { rotateX: 50 },
      // { rotateZ: 50 },
      // { translateX: 250 },
      // { translateY: 250 },
      // { translateZ: 550 },
      { scaleX: 3 },
      // { scaleY: 3 },
      // { scaleZ: 2 },
    ]
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('GettingStated', () => GettingStated);
