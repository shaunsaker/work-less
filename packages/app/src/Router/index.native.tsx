import React from 'react';
import { Component, CommonProps, Stateless } from 'reactxp';
import Navigator, {
  NavigatorDelegateSelector as DelegateSelector,
  Types as NavigatorTypes,
} from 'reactxp-navigation';

import routes from './routes';

export class App extends Component<CommonProps, Stateless> {
  private navigator: Navigator | undefined;

  private navigatorRef = (navigator: Navigator) => {
    this.navigator = navigator;
  };

  componentDidMount() {
    if (this.navigator) {
      this.navigator.immediatelyResetRouteStack([
        {
          routeId: routes.home.id,
          sceneConfigType: NavigatorTypes.NavigatorSceneConfigType.Fade,
        },
      ]);
    }
  }

  private onNavigate = (routeId: number) => {
    if (this.navigator) {
      this.navigator.push({
        sceneConfigType: NavigatorTypes.NavigatorSceneConfigType.FloatFromRight,
        routeId,
      });
    }
  };

  private onBack = () => {
    if (this.navigator) {
      this.navigator.pop();
    }
  };

  private renderScene = (navigatorRoute: NavigatorTypes.NavigatorRoute) => {
    const props = {
      handleNavigate: this.onNavigate,
      handleBack: this.onBack,
    };
    const routeKey = Object.keys(routes).filter(
      (key) => routes[key].id === navigatorRoute.routeId,
    )[0];

    if (!routeKey) {
      return null;
    }

    const { component: Component } = routes[routeKey];

    if (Component) {
      return <Component {...props} />;
    }

    return null;
  };

  render() {
    return (
      <Navigator
        delegateSelector={DelegateSelector}
        renderScene={this.renderScene}
        ref={this.navigatorRef}
      />
    );
  }
}

export default App;
