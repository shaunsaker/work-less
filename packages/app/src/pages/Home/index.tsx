import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import Home from './Home';
import routes from '../../Router/routes';
import Page from '../../types/Page';
import { setSnackbarMessage } from '../../reducers/snackbar/actions';

interface Props extends Page, RouteComponentProps {
  handleSetSnackbarMessage: (message: string) => void;
}

const HomeContainer: React.FC<Props> = ({ history, handleSetSnackbarMessage }) => {
  const onSubmit = () => {
    handleSetSnackbarMessage('Testing');
  };

  return <Home handleSubmit={onSubmit} />;
};

const mapDispatchToProps = {
  handleSetSnackbarMessage: setSnackbarMessage,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(HomeContainer),
);
