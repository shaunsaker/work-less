import React from 'react';
import { View } from 'reactxp';

import Calendar from '../../components/YearlyCalendar/Calendar/Calendar';
import WEEKS from '../../components/YearlyCalendar/Calendar/__stories__/weeks';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Home: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar month="October" weeks={WEEKS} />
    </View>
  );
};

export default Home;
