import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';

import Home from './Home';
import routes from '../../Router/routes';
import Page from '../../types/Page';
import { setSnackbarMessage } from '../../store/reducers/snackbar/actions';

interface Props extends Page, RouteComponentProps {}

const HomeContainer: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setSnackbarMessage(Date.now().toString()));
  };

  return <Home handleSubmit={onSubmit} />;
};

export default withRouter(HomeContainer);
