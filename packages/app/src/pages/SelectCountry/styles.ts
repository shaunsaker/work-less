import { Styles } from 'reactxp';

import { rhythm } from '../../styleConstants';

const styles = {
  container: Styles.createViewStyle({
    marginBottom: rhythm.vt * 2,
  }),
  textInputContainer: Styles.createViewStyle({
    alignSelf: 'stretch',
    marginBottom: rhythm.vt,
  }),
  countryButtonContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
};

export default styles;
