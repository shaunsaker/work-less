import React from 'react';
import { View, Button, Text } from 'reactxp';

import { routeIds } from '../../App';

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
    </View>
  );
};

export default Home;
