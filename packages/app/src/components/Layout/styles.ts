import { Styles, UserInterface } from 'reactxp';

import { rhythm, sizes } from '../../styleConstants';

const VERTICAL_PADDING = rhythm.vt * 2;
const IMAGE_SIZE = 1216 / 1.5; // up the resolution by 50%
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = UserInterface.measureWindow();

const styles = {
  wrapper: Styles.createViewStyle({
    minHeight: WINDOW_HEIGHT,
    backgroundColor: 'white',
    flex: 1,
  }),
  container: Styles.createScrollViewStyle({}),
  headerBarContainer: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
  }),
  contentContainer: Styles.createViewStyle({
    minHeight: WINDOW_HEIGHT,
    paddingTop: VERTICAL_PADDING + sizes.headerHeight, // paddingBottom comes from buttonContainer
    flexDirection: 'row',
  }),
  centeredContentContainer: Styles.createViewStyle({
    alignItems: 'center',
  }),
  textContainer: Styles.createViewStyle({
    paddingTop: VERTICAL_PADDING,
    flex: 1,
    maxWidth: 640,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: WINDOW_WIDTH < 768 ? rhythm.hz : rhythm.hz * 2,
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
    paddingTop: IMAGE_SIZE / 10,
  }),
  centeredImageContainer: Styles.createViewStyle({
    justifyContent: 'center',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: VERTICAL_PADDING * 2, // add it here for shadow
  }),
  buttonContainer: Styles.createViewStyle({
    marginRight: rhythm.hz,
    overflow: 'visible', // necessary for shadow to appear
  }),
};

export default styles;
