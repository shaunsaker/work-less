import { Styles } from 'reactxp';

import { colors, rhythm, shadows } from '../../styleConstants';

const IMAGE_SIZE = 24;

const styles = {
  container: Styles.createViewStyle({
    alignSelf: 'stretch',
    borderWidth: rhythm.bw,
    borderColor: colors.primaryText,
    borderRadius: rhythm.br,
    ...shadows.small,
  }),
  contentContainer: Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: rhythm.vt,
    paddingBottom: rhythm.vt,
    paddingLeft: rhythm.hz / 2,
    paddingRight: rhythm.hz,
  }),
  imageContainer: Styles.createViewStyle({
    marginRight: rhythm.hz / 2,
  }),
  image: Styles.createImageStyle({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  }),
  textContainer: Styles.createViewStyle({}),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: colors.primaryText,
  }),
};

export default styles;
