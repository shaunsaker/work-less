import { Styles } from 'reactxp';

import { colors, rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: colors.primaryText,
    borderRadius: 8,
    paddingHorizontal: rhythm.hz,
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  }),
  imageContainer: Styles.createViewStyle({
    marginRight: rhythm.hz,
  }),
  image: Styles.createImageStyle({
    width: 24,
    height: 24,
  }),
  textContainer: Styles.createViewStyle({
    paddingVertical: rhythm.vt,
  }),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: colors.primaryText,
  }),
};

export default styles;
