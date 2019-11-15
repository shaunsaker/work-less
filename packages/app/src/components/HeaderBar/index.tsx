import React from 'react';
import { View, Image, Button } from 'reactxp';
import { withRouter, RouteComponentProps } from 'react-router';

import styles from './styles';
import ASSETS from '../../assets';
import routes from '../../Router/routes';

interface Props extends RouteComponentProps {
  showShadow?: boolean;
}

const HeaderBar: React.FC<Props> = ({ showShadow, history }) => {
  const onPress = () => {
    history.push(routes.home.path);
  };

  return (
    <View style={[styles.container, showShadow ? styles.shadow : {}]}>
      <Button onPress={onPress}>
        <Image source={ASSETS.logo} style={styles.image} />
      </Button>
    </View>
  );
};

export default withRouter(HeaderBar);
