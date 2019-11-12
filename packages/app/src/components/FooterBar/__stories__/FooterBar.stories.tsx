import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import FooterBar from '../FooterBar';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

storiesOf('Components|FooterBar', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => <FooterBar handleLinkPress={console.log} />);
