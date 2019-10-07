import React from 'react';
import { View, Button, Text } from 'reactxp';

import { routeIds } from '../../App';
import FooterBar from '../../components/FooterBar';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Home: React.FC<Props> = ({ handleNavigatePress }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => handleNavigatePress(routeIds.Test)}>
        <Text>Go to Test</Text>
      </Button>

      <FooterBar />
    </View>
  );
};

export default Home;
