import { Styles } from 'reactxp';

import { colors } from '../../styleConstants';

const styles = {
  container: Styles.createLinkStyle({}),
  text: Styles.createTextStyle({
    fontFamily: 'Raleway-Bold',
    fontSize: 48,
    color: colors.primaryText,
  }),
  highlightedText: Styles.createTextStyle({
    color: colors.secondary,
  }),
};

export default styles;
