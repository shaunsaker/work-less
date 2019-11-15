import React, { useEffect } from 'react';

import { dispatch } from '../../model';
import { getLocation } from '../../actions';

interface Props {}

const LocationHandler: React.FC<Props> = () => {
  useEffect(() => {
    dispatch(getLocation)();
  });

  return null;
};

export default LocationHandler;
