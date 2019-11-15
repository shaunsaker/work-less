import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  calendarContainer: Styles.createViewStyle({
    marginTop: rhythm.vt * -1, // remove margin from first nth calendar item styles
    marginLeft: rhythm.hz * -1, // as above
  }),
};

export default styles;
