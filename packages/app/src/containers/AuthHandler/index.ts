import React, { useEffect } from 'react';

import { dispatch } from '../../model';
import { signInAnonymously } from '../../actions';

interface Props {}

const AuthHandler: React.FC<Props> = () => {
  useEffect(() => {
    dispatch(signInAnonymously)();
  });

  return null;
};

export default AuthHandler;
