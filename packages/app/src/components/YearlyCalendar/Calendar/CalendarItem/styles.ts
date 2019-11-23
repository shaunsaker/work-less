import { Styles } from 'reactxp';

import { colors } from '../../../../styleConstants';
import { getPrimaryTextColor } from '../../../../styleConstants/colors';

const CONTAINER_SIZE = 24;

const styles = {
  container: Styles.createViewStyle({
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: CONTAINER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightPrimaryText,
    borderWidth: 1,
    borderColor: colors.mediumPrimaryText,
  }),
  leaveDayContainer: Styles.createViewStyle({
    backgroundColor: colors.secondary,
  }),
  publicHolidayContainer: Styles.createViewStyle({
    backgroundColor: colors.accent,
  }),
  weekendContainer: Styles.createViewStyle({
    opacity: 0.65,
  }),
  text: Styles.createTextStyle({
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: colors.primaryText,
  }),
  leaveDayText: Styles.createTextStyle({
    color: 'white',
  }),
  publicHolidayText: Styles.createTextStyle({
    color: 'white',
  }),
  weekendText: Styles.createTextStyle({
    color: getPrimaryTextColor(0.33),
  }),
};

export default styles;
