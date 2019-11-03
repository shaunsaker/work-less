import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '..';

const handleNavigate = (link: string) => console.log(link);

storiesOf('Pages|Home', module).add('default', () => <Home handleNavigate={handleNavigate} />);
