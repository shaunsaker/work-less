import React from 'react';
import { View, Button, Text } from 'reactxp';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Test: React.FC<Props> = ({ handleBackPress }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={handleBackPress}>
        <Text>Go back</Text>
      </Button>
    </View>
  );
};

export default Test;
