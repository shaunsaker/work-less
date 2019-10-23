import { Styles } from 'reactxp';

import { rhythm, shadows } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    backgroundColor: 'white',
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: rhythm.hz,
  }),
  shadow: Styles.createViewStyle({
    ...shadows.large,
  }),
  image: Styles.createImageStyle({
    width: 120,
    height: 36,
  }),
};

export default styles;
