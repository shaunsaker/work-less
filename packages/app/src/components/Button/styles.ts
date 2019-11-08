import { Styles } from 'reactxp';

import { rhythm, shadows } from '../../styleConstants';

const styles = {
  container: Styles.createButtonStyle({
    borderRadius: rhythm.br,
    ...shadows.regular,
  }),
  contentContainer: {
    paddingTop: rhythm.vt,
    paddingBottom: rhythm.vt,
    paddingRight: rhythm.hz,
    paddingLeft: rhythm.hz,
  },
  secondaryContainer: Styles.createButtonStyle({
    ...shadows.small,
  }),
  disabledContainer: Styles.createButtonStyle({
    ...shadows.none,
  }),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'white',
  }),
};

export default styles;
