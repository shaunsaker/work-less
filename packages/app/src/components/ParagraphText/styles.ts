import { Styles } from 'reactxp';

import { colors } from '../../styleConstants';

const styles = {
  text: Styles.createTextStyle({
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.primaryText,
    fontWeight: '500',
  }),
  boldText: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
  }),
};

export default styles;
