import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Snackbar from '../Snackbar';

const message = 'Saved successfully.';

storiesOf('Components|Snackbar', module).add('default', () => <Snackbar message={message} />);
