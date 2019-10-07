import { Styles } from 'reactxp';

import { colors, rhythm, shadows } from '../../styleConstants';

const styles = {
  container: Styles.createButtonStyle({
    backgroundColor: colors.primary,
    paddingVertical: rhythm.vt / 2,
    paddingHorizontal: rhythm.hz,
    borderRadius: 8,
  }),
  secondaryContainer: Styles.createButtonStyle({}),
  shadow: Styles.createButtonStyle({
    ...shadows.regular,
  }),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'white',
  }),
};

export default styles;
