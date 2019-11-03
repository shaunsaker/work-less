import { Styles, Platform, UserInterface } from 'reactxp';

import { rhythm } from '../../styleConstants';
import isIPhoneX from '../../helpers/isIPhoneX';

const isIOS = Platform.getType() === 'ios';
const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : isIOS ? 22 : 0; // status bar height
const VERTICAL_PADDING = rhythm.vt * 2;
const IMAGE_SIZE = 1216 / 1.5; // up the resolution by 50%
const { height: WINDOW_HEIGHT } = UserInterface.measureWindow();
const HEADER_HEIGHT = 60;

const styles = {
  wrapper: Styles.createViewStyle({
    minHeight: WINDOW_HEIGHT,
  }),
  container: Styles.createScrollViewStyle({
    backgroundColor: 'white',
  }),
  headerBarContainer: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingTop: STATUS_BAR_HEIGHT,
  }),
  contentContainer: Styles.createViewStyle({
    minHeight: WINDOW_HEIGHT,
    paddingTop: VERTICAL_PADDING + HEADER_HEIGHT, // paddingBottom comes from buttonContainer
    flexDirection: 'row',
    alignItems: 'center',
  }),
  textContainer: Styles.createViewStyle({
    paddingTop: VERTICAL_PADDING,
    flex: 1,
    maxWidth: 560,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: rhythm.hz,
    borderRadius: rhythm.br,
  }),
  titleTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  imageContainer: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: IMAGE_SIZE / -10,
    justifyContent: 'center',
    paddingTop: IMAGE_SIZE / 10,
  }),
  image: Styles.createImageStyle({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  }),
  paragraphTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  buttonsContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
    paddingBottom: VERTICAL_PADDING, // add it here for shadow
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
  buttonContainer: Styles.createViewStyle({
    marginRight: rhythm.hz,
  }),
};

export default styles;
