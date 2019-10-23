import { Styles, Platform } from 'reactxp';

import { rhythm } from '../../styleConstants';
import isIPhoneX from '../../helpers/isIPhoneX';

const isIOS = Platform.getType() === 'ios';
const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : isIOS ? 22 : 0; // status bar height
const VERTICAL_PADDING = rhythm.vt * 2;

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    backgroundColor: 'white',
    paddingTop: STATUS_BAR_HEIGHT,
  }),
  contentWrapper: Styles.createScrollViewStyle({
    flex: 1,
    backgroundColor: 'green',
  }),
  contentContainer: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    paddingTop: VERTICAL_PADDING, // paddingBottom comes from buttonContainer
    paddingHorizontal: rhythm.hz,
    backgroundColor: 'red',
  }),
  textContainer: Styles.createViewStyle({
    maxWidth: 480,
  }),
  titleTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  imageContainer: Styles.createViewStyle({
    backgroundColor: 'blue',
  }),
  image: Styles.createImageStyle({}),
  paragraphTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  buttonContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
    paddingBottom: VERTICAL_PADDING, // add it here for shadow
  }),
};

export default styles;
