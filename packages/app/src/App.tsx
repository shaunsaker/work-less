import React from 'react';
import { Component, CommonProps, Stateless } from 'reactxp';
import Navigator, {
  NavigatorDelegateSelector as DelegateSelector,
  Types as NavigatorTypes,
} from 'reactxp-navigation';

import Home from './pages/Home';
import SelectCountry from './pages/SelectCountry';
import InputLeaveDays from './pages/InputLeaveDays';
import Results from './pages/Results';

export enum routeIds {
  Home,
  SelectCountry,
  InputLeaveDays,
  Results,
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
    const routeProps = {
      handleNavigate: this.onNavigate,
      handleBack: this.onBack,
    };

    switch (navigatorRoute.routeId) {
      case routeIds.Home:
        return <Home {...routeProps} />;

      case routeIds.SelectCountry:
        return <SelectCountry {...routeProps} />;

      case routeIds.InputLeaveDays:
        return <InputLeaveDays {...routeProps} />;

      case routeIds.Results:
        return <Results {...routeProps} />;
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
