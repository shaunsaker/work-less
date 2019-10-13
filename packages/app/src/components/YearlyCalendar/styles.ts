import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }),
  calendarContainer: Styles.createViewStyle({
    margin: rhythm.vt,
  }),
};

export default styles;
