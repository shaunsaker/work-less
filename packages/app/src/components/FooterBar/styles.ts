import { Styles } from 'reactxp';

import { colors, rhythm } from '../../styleConstants';
import isIPhoneX from '../../helpers/isIPhoneX';

const PADDING_BOTTOM = isIPhoneX() ? 22 : rhythm.vt; // in case of wrap

const styles = {
  container: Styles.createViewStyle({
    alignSelf: 'stretch',
    backgroundColor: colors.primaryText,
    paddingBottom: PADDING_BOTTOM,
    paddingHorizontal: rhythm.hz,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }),
  linksContainer: Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
    marginRight: rhythm.hz,
  }),
  linkContainer: Styles.createViewStyle({
    marginTop: rhythm.vt, // in case of wrap
    marginRight: rhythm.hz,
  }),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'white',
  }),
  link: Styles.createLinkStyle({
    textDecorationLine: 'none',
  }),
  linkText: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'white',
  }),
  illustrationTextContainer: Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
    marginTop: rhythm.vt, // in case of wrap
    justifyContent: 'flex-end',
  }),
};

export default styles;
