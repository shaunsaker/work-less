import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Snackbar from './Snackbar';
import { State } from '../../reducers';

interface Props {
  message?: string;
  children: any; // FIXME:
}

const SnackbarHandler: React.FC<Props> = ({ message, children }) => {
  const snackbarComponent = message ? <Snackbar message={message} /> : null;

  return (
    <Fragment>
      {children}

      {snackbarComponent}
    </Fragment>
  );
};

const mapStateToProps = (state: State) => {
  const { snackbar } = state;
  const { message } = snackbar;

  return {
    message,
  };
};

export default connect(mapStateToProps)(SnackbarHandler);
