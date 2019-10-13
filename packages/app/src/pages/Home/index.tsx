import React from 'react';
import { View } from 'reactxp';

import Calendar from '../../components/YearlyCalendar/Calendar';

const DATE = new Date();

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Home: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar date={DATE} />
    </View>
  );
};

export default Home;
