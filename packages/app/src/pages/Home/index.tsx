import React from 'react';
import { View } from 'reactxp';

import Tooltip from '../../components/YearlyCalendar/Calendar/CalendarItem/Tooltip';
import CalendarItem from '../../components/YearlyCalendar/Calendar/CalendarItem';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const Home: React.FC<Props> = ({ handleNavigatePress }) => {
  const text = 'Heritage Day';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip id={text} text={text}>
        <CalendarItem day={14} isSecondary />
      </Tooltip>
    </View>
  );
};

export default Home;
