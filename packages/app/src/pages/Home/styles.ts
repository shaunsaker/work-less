import { Styles, Platform, UserInterface } from 'reactxp';

import { rhythm } from '../../styleConstants';
import isIPhoneX from '../../helpers/isIPhoneX';

const isIOS = Platform.getType() === 'ios';
const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : isIOS ? 22 : 0; // status bar height
const VERTICAL_PADDING = rhythm.vt * 2;
const IMAGE_SIZE = 1200;
const { height: WINDOW_HEIGHT } = UserInterface.measureWindow();
const HEADER_HEIGHT = 60;

const styles = {
  container: Styles.createViewStyle({
    height: WINDOW_HEIGHT,
    backgroundColor: 'white',
    paddingTop: STATUS_BAR_HEIGHT,
  }),
  contentContainer: Styles.createViewStyle({
    height: WINDOW_HEIGHT - HEADER_HEIGHT,
    paddingTop: VERTICAL_PADDING, // paddingBottom comes from buttonContainer
    flexDirection: 'row',
    alignItems: 'center',
  }),
  textContainer: Styles.createViewStyle({
    flex: 1,
    maxWidth: 560,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: rhythm.hz,
    borderRadius: rhythm.br,
  }),
  titleTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  imageContainer: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: IMAGE_SIZE / -4,
    justifyContent: 'center',
    paddingTop: IMAGE_SIZE / 8,
  }),
  image: Styles.createImageStyle({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  }),
  paragraphTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  buttonContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
    paddingBottom: VERTICAL_PADDING, // add it here for shadow
  }),
};

export default styles;
