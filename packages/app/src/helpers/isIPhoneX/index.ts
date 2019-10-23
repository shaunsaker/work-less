import { Platform, UserInterface } from 'reactxp';

const isIPhoneX = () => {
  const isIOS = Platform.getType() === 'ios';
  const userInterface = UserInterface.measureWindow();

  return (
    isIOS &&
    (userInterface.height === 812 ||
      userInterface.width === 812 ||
      (userInterface.height === 896 || userInterface.width === 896))
  );
};

export default isIPhoneX;
