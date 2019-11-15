import { Styles } from 'reactxp';

import { rhythm, shadows } from '../../../../../styleConstants';
import { getPrimaryTextColor } from '../../../../../styleConstants/colors';

const styles = {
  wrapper: Styles.createViewStyle({}),
  container: Styles.createViewStyle({
    backgroundColor: getPrimaryTextColor(0.85),
    paddingVertical: rhythm.vt / 2,
    paddingHorizontal: rhythm.hz / 2,
    borderRadius: rhythm.br,
    ...shadows.regular,
  }),
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: 'white',
  }),
};

export default styles;
