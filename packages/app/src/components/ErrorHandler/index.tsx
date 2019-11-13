import React from 'react';

import RouterWrapper from '../../Router/RouterWrapper';
import Error from './Error';
import reloadApp from './helpers/reloadApp';

interface Props {}

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorHandler extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error) {
    const { message } = error;

    return { hasError: true, message };
  }

  componentDidCatch() {
    // TODO: Log error to service
  }

  onReloadPress = () => {
    reloadApp();
  };

  render() {
    const { hasError, message } = this.state;

    if (hasError) {
      return (
        <RouterWrapper>
          <Error message={message} handleReloadPress={this.onReloadPress} />
        </RouterWrapper>
      );
    }

    const { children } = this.props;

    return children;
  }
}

export default ErrorHandler;
