import { Styles } from 'reactxp';

import { colors, rhythm } from '../../../src/styleConstants';

const styles = {
  container: Styles.createViewStyle({}),
  originalStoryContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
    marginBottom: rhythm.vt * 2,
  }),
  responsiveSectionsContainer: Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
  sectionContainer: Styles.createViewStyle({
    marginRight: rhythm.hz,
    marginBottom: rhythm.vt,
  }),
  labelContainer: Styles.createViewStyle({
    marginBottom: rhythm.vt,
  }),
  label: Styles.createTextStyle({}),
  responsiveSectionContainer: Styles.createViewStyle({
    alignItems: 'flex-start',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primaryText,
    borderRadius: rhythm.br,
  }),
};

export default styles;
