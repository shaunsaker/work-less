import { Styles, Platform } from 'reactxp';

import { rhythm, shadows, sizes } from '../../styleConstants';

import { isIPhoneX } from '../../utils';

const isIOS = Platform.getType() === 'ios';
const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : isIOS ? 22 : 0; // status bar height

const styles = {
  container: Styles.createViewStyle({
    alignSelf: 'stretch',
    height: sizes.headerHeight + STATUS_BAR_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: rhythm.hz,
    paddingTop: STATUS_BAR_HEIGHT,
    backgroundColor: 'white',
  }),
  shadow: Styles.createViewStyle({
    ...shadows.regular,
  }),
  image: Styles.createImageStyle({
    width: 120,
    height: 36,
  }),
};

export default styles;
