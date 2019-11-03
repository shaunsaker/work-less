import React from 'react';
import { Component, CommonProps, Stateless } from 'reactxp';
import Navigator, {
  NavigatorDelegateSelector as DelegateSelector,
  Types as NavigatorTypes,
} from 'reactxp-navigation';

import Home from './pages/Home';
import Test from './pages/Test';

export enum routeIds {
  Home,
  Support,
  Terms,
  Privacy,
}

export class App extends Component<CommonProps, Stateless> {
  private navigator: Navigator | undefined;

  private navigatorRef = (navigator: Navigator) => {
    this.navigator = navigator;
  };

  componentDidMount() {
    if (this.navigator) {
      this.navigator.immediatelyResetRouteStack([
        {
          routeId: routeIds.Home,
          sceneConfigType: NavigatorTypes.NavigatorSceneConfigType.Fade,
        },
      ]);
    }
  }

  private onNavigate = (routeId: number) => {
    if (this.navigator) {
      this.navigator.push({
        sceneConfigType: NavigatorTypes.NavigatorSceneConfigType.FloatFromBottom,
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
    const routeProps = {
      handleNavigate: this.onNavigate,
      handleBack: this.onBack,
    };

    switch (navigatorRoute.routeId) {
      case routeIds.Home:
        return <Home {...routeProps} />;

      case routeIds.Support:
        return <Test {...routeProps} />;

      case routeIds.Terms:
        return <Test {...routeProps} />;

      case routeIds.Privacy:
        return <Test {...routeProps} />;
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
