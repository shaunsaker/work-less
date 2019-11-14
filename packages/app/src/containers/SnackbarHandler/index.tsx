import React, { Fragment, useState, useEffect } from 'react';

import Snackbar from './Snackbar';
import { state, watch, dispatch } from '../../model';
import { resetSnackbarMessage } from '../../actions';

interface Props {
  children: any; // FIXME:
}

const SnackbarHandler: React.FC<Props> = ({ children }) => {
  const message = watch(state.snackbar.message);
  let interval: number;
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const onPress = () => {
    hide();
  };
  const onAnimateOut = () => {
    setShouldAnimateOut(false);
    dispatch(resetSnackbarMessage)();
  };

  const hide = () => {
    resetTimer();
    setShouldAnimateOut(true);
  };
  const resetTimer = () => {
    clearInterval(interval);
    setSeconds(0);
  };
  const startTimer = () => {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  useEffect(() => {
    if (message) {
      if (seconds === 0) {
        startTimer();
      } else {
        resetTimer();
        startTimer();
      }
    }

    return () => clearInterval(interval);
  }, [message]);

  useEffect(() => {
    /*
     * Auto hide after 3 seconds
     */
    if (message && seconds === 3) {
      hide();
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const snackbarComponent = message ? (
    <Snackbar
      message={message}
      shouldAnimateOut={shouldAnimateOut}
      handlePress={onPress}
      handleAnimateOut={onAnimateOut}
    />
  ) : null;

  return (
    <Fragment>
      {children}

      {snackbarComponent}
    </Fragment>
  );
};

export default SnackbarHandler;
