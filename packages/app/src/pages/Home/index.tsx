import React from "react";
import { View, Button, Text } from "reactxp";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ history }) => {
  const onSelectCountryClick = () => history.push("/select-country");

  return (
    <View>
      <Button onPress={onSelectCountryClick}>
        <Text>Select Country</Text>
      </Button>
    </View>
  );
};

export default Home;
