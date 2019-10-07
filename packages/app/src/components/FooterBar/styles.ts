import { Styles } from 'reactxp';

import { colors, rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    backgroundColor: colors.primaryText,
    paddingVertical: rhythm.vt,
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
    flexDirection: 'row',
  }),
};

export default styles;
