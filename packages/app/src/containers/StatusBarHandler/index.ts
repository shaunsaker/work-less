import React, { useEffect } from 'react';
import { StatusBar } from 'reactxp';

import { colors } from '../../styleConstants';

interface Props {}

const StatusBarHandler: React.FC<Props> = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary, true);
  });

  return null;
};

export default StatusBarHandler;
