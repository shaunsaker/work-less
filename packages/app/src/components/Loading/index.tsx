import React from 'react';
import { ActivityIndicator } from 'reactxp';

import { colors } from '../../styleConstants';

interface Props {}

const Loading: React.FC<Props> = () => {
  return <ActivityIndicator color={colors.primary} size="medium" />;
};

export default Loading;
