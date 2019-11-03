import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  calendarContainer: Styles.createViewStyle({
    marginTop: rhythm.vt * -1,
    marginHorizontal: rhythm.hz * -1,
  }),
};

export default styles;
