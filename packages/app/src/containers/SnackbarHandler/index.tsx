import React, { Fragment, useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Snackbar from './Snackbar';
import { ApplicationState } from '../../store/reducers';
import { resetSnackbarMessage } from '../../store/reducers/snackbar/actions';

interface Props {
  message?: string;
  children: any; // FIXME:
}

const SnackbarHandler: React.FC<Props> = ({ message, children }) => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);
  const [seconds, setSeconds] = useState(0);
  let interval: number;
  const dispatch = useDispatch();
  const onPress = () => {
    hide();
  };
  const onAnimateOut = () => {
    setShouldAnimateOut(false);
    dispatch(resetSnackbarMessage());
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

const mapStateToProps = (state: ApplicationState) => {
  return {
    message: state.snackbar.message,
  };
};

export default connect(mapStateToProps)(SnackbarHandler);
