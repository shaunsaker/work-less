import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';

const styles = {
  wrapper: Styles.createViewStyle({
    position: 'absolute',
    left: rhythm.hz,
    // bottom supplied by function
  }),
  container: Styles.createViewStyle({
    alignSelf: 'flex-start',
    paddingVertical: rhythm.vt,
    paddingHorizontal: rhythm.hz,
    borderRadius: rhythm.br,
    backgroundColor: 'rgba(0, 0, 0, 0.67)',
  }),
  text: Styles.createTextStyle({
    color: 'white',
  }),
};

export default styles;
