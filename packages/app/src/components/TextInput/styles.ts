import { Styles } from 'reactxp';

import { colors, rhythm } from '../../styleConstants';

const PADDING_HORIZONTAL = rhythm.hz;
const LABEL_PADDING = rhythm.hz / 4;

const styles = {
  container: Styles.createViewStyle({
    marginTop: 8, // required for label positioning = label height / 2
    overflow: 'visible',
    alignSelf: 'stretch',
  }),
  input: Styles.createTextInputStyle({
    backgroundColor: 'white',
    borderWidth: rhythm.bw,
    borderColor: colors.primaryText,
    borderRadius: rhythm.br,
    paddingVertical: rhythm.vt,
    paddingHorizontal: PADDING_HORIZONTAL,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: colors.primaryText,
  }),
  labelWrapper: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: PADDING_HORIZONTAL + 1 - LABEL_PADDING, // not sure where the 1 comes from but it is needed
    bottom: 0,
    justifyContent: 'center',
  }),
  labelContainer: Styles.createViewStyle({
    backgroundColor: 'white',
    paddingHorizontal: LABEL_PADDING,
  }),
  label: Styles.createTextStyle({
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  }),
};

export default styles;
