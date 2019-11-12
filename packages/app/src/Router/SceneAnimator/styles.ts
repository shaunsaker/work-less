import { Styles, Platform } from 'reactxp';

const platformType = Platform.getType();
const isWeb = Boolean(platformType === 'web');

const styles = {
  container: Styles.createViewStyle({
    flex: isWeb ? 1 : undefined,
  }),
};

export default styles;
