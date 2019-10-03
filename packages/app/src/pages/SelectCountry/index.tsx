import React from "react";
import { View, Button, Text } from "reactxp";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const SelectCountry: React.FC<Props> = ({ history }) => {
  const onGoBackClick = () => history.goBack();

  return (
    <View>
      <Button onPress={onGoBackClick}>
        <Text>Go Back</Text>
      </Button>
    </View>
  );
};

export default SelectCountry;
