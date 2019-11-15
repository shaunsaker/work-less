import React from 'react';
import { View } from 'reactxp';

import ASSETS from '../../assets';
import styles from './styles';
import DateOfSignificance from '../../types/DateOfSignificance';

import Layout from '../../components/Layout';
import YearlyCalendar from '../../components/YearlyCalendar';
import Loading from '../../components/Loading';

interface Props {
  daysOff: number;
  datesOfSignificance: DateOfSignificance[];
  isLoading?: boolean;
  handleShare: () => void;
  handleBack: () => void;
}

const Results: React.FC<Props> = ({
  daysOff,
  datesOfSignificance,
  isLoading,
  handleShare,
  handleBack,
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
    >
      <View style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={styles.calendarContainer}>
            <YearlyCalendar datesOfSignificance={datesOfSignificance} />
          </View>
        )}
      </View>
    </Layout>
  );
};

export default Results;
