import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';
import { getWindowResponsiveClass } from '../../utils';

const styles = {
  container: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  calendarContainer: Styles.createViewStyle({
    marginTop: rhythm.vt * -1, // remove margin from first nth calendar item styles
    marginLeft: getWindowResponsiveClass() === 'sm' ? 0 : rhythm.hz * -1, // as above
  }),
};

export default styles;
