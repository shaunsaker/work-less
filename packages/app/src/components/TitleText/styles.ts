import { Styles } from 'reactxp';

import { colors } from '../../styleConstants';
import getWindowResponsiveClass from '../../helpers/getWindowResponsiveClass';

const windowResponsiveClass = getWindowResponsiveClass();
const FONT_SIZE = windowResponsiveClass === 'sm' ? 36 : 48;

const styles = {
  container: Styles.createLinkStyle({}),
  text: Styles.createTextStyle({
    fontFamily: 'Raleway-Bold',
    fontSize: FONT_SIZE,
    color: colors.primaryText,
  }),
  highlightedText: Styles.createTextStyle({
    color: colors.secondary,
  }),
};

export default styles;
