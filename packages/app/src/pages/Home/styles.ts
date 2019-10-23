import { Styles, Platform } from 'reactxp';

import { rhythm } from '../../styleConstants';
import isIPhoneX from '../../helpers/isIPhoneX';

const isIOS = Platform.getType() === 'ios';
const STATUS_BAR_HEIGHT = isIPhoneX() ? 44 : isIOS ? 22 : 0; // status bar height

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    backgroundColor: 'white',
    paddingTop: STATUS_BAR_HEIGHT,
  }),
  contentContainer: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    paddingVertical: rhythm.vt,
    paddingLeft: rhythm.hz * 4,
    flexDirection: 'row',
  }),
  textContainer: Styles.createViewStyle({
    maxWidth: 480,
    flex: 1,
  }),
  titleTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  imageContainer: Styles.createViewStyle({
    flex: 1,
  }),
  image: Styles.createImageStyle({
    flex: 1,
    minWidth: 360,
    height: 360,
  }),
  paragraphTextContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  buttonContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
  }),
};

export default styles;
