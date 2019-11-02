import { Platform, UserInterface } from 'reactxp';

export const iPhoneXPortaitWidth = 812;
export const iPhoneXPortraitHeight = 896;

const isIPhoneX = () => {
  const isIOS = Platform.getType() === 'ios';
  const userInterface = UserInterface.measureWindow();

  return (
    isIOS &&
    (userInterface.height === iPhoneXPortaitWidth ||
      userInterface.width === iPhoneXPortaitWidth ||
      (userInterface.height === iPhoneXPortraitHeight ||
        userInterface.width === iPhoneXPortraitHeight))
  );
};

export default isIPhoneX;
