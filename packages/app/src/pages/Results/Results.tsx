import React from 'react';
import { View } from 'reactxp';

import ASSETS from '../../assets';
import styles from './styles';

import Layout from '../../components/Layout';
import YearlyCalendar from '../../components/YearlyCalendar';
import DateOfSignificance from '../../types/DateOfSignificance';

interface Props {
  daysOff: number;
  datesOfSignificance: DateOfSignificance[];
  handleShare: () => void;
  handleBack: () => void;
  handleFooterLinkPress: Function;
}

const Results: React.FC<Props> = ({
  daysOff,
  datesOfSignificance,
  handleShare,
  handleBack,
  handleFooterLinkPress,
}) => {
  const titleHighlightText = `${daysOff} consecutive days`;
  const titleText = `Great success!\n${titleHighlightText}\noff!`;
  const paragraphText = 'You should take leave on the following days:';
  const imageSource = ASSETS.results;
  const buttons = [
    {
      text: 'SHARE THIS',
      handlePress: handleShare,
    },
    {
      text: 'GO BACK',
      isSecondary: true,
      handlePress: handleBack,
    },
  ];

  return (
    <Layout
      titleText={titleText}
      titleHighlightText={titleHighlightText}
      paragraphText={paragraphText}
      imageSource={imageSource}
      buttons={buttons}
      handleFooterLinkPress={handleFooterLinkPress}
    >
      <View style={styles.container}>
        <View style={styles.calendarContainer}>
          <YearlyCalendar datesOfSignificance={datesOfSignificance} />
        </View>
      </View>
    </Layout>
  );
};

export default Results;
