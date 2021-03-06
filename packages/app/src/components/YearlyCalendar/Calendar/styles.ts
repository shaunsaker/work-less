import { Styles } from 'reactxp';

import { colors, rhythm, shadows } from '../../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primaryText,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    ...shadows.small,
    maxWidth: 240,
  }),
  titleTextContainer: Styles.createViewStyle({
    borderBottomWidth: 1,
    borderColor: colors.primaryText,
    paddingVertical: rhythm.vt / 2,
    paddingHorizontal: rhythm.hz,
    alignItems: 'center',
    backgroundColor: colors.lightPrimaryText,
  }),
  titleText: Styles.createTextStyle({
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.primaryText,
  }),
  row: Styles.createViewStyle({
    flexDirection: 'row',
  }),
  dayTextContainer: Styles.createViewStyle({
    alignItems: 'center',
  }),
  dayText: Styles.createTextStyle({
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.primaryText,
  }),
  contentItemContainer: Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    paddingVertical: rhythm.vt / 2,
    paddingHorizontal: rhythm.hz / 4,
  }),
};

export default styles;
