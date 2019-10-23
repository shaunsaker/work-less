import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import { View } from 'reactxp';

import Link from '..';

const url = '/support';
const text = 'Support';

storiesOf('Components|Link', module).add('default', () => (
  <View style={{ backgroundColor: 'black' }}>
    <Link url={url} text={text} />
  </View>
));
