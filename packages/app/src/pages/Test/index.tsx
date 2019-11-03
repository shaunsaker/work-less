import React from 'react';
import { View, Button, Text } from 'reactxp';

interface Props {
  handleNavigate: Function;
  handleBack: () => void;
}

const Test: React.FC<Props> = ({ handleBack }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={handleBack}>
        <Text>Go back</Text>
      </Button>
    </View>
  );
};

export default Test;
