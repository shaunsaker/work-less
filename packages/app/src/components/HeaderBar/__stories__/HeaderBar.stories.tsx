import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import { View, ScrollView, Styles } from 'reactxp';

import HeaderBar from '..';

storiesOf('Components|HeaderBar', module).add('default', () => (
  <View
    style={Styles.createViewStyle({
      flex: 1,
      backgroundColor: 'red',
      height: 400,
      paddingTop: 64,
    })}
  >
    <ScrollView
      style={Styles.createScrollViewStyle({
        backgroundColor: 'lightgray',
      })}
    >
      <View style={{ height: 2000, backgroundColor: 'blue' }} />
    </ScrollView>

    <HeaderBar showShadow />
  </View>
));
