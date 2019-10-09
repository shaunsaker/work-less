import React from 'react';
import { View, Text } from 'reactxp';

import { routeIds } from '../../App';
import Button from '../../components/Button';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Home: React.FC<Props> = ({ handleNavigatePress }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button text="Let's get crackalacking" handlePress={() => console.log('')} />
    </View>
  );
};

export default Home;
