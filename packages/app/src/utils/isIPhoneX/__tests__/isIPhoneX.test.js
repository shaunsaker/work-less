import { Platform, UserInterface } from 'reactxp';

import isIPhoneX, { iPhoneXPortaitWidth, iPhoneXPortraitHeight } from '..';

describe('isIPhoneX()', () => {
  it('should work correctly on android', () => {
    Platform.getType = jest.fn(() => {
      return 'android';
    });

    expect(isIPhoneX()).toEqual(false);
  });

  describe('should work correctly on iOS', () => {
    it('when the device is not an iPhoneX', () => {
      Platform.getType = jest.fn(() => {
        return 'ios';
      });
      UserInterface.measureWindow = jest.fn(() => {
        return {
          width: iPhoneXPortaitWidth - 100,
          height: iPhoneXPortraitHeight - 100,
        };
      });

      expect(isIPhoneX()).toEqual(false);
    });

    it('when the device is an iPhoneX in portait', () => {
      Platform.getType = jest.fn(() => {
        return 'ios';
      });
      UserInterface.measureWindow = jest.fn(() => {
        return {
          width: iPhoneXPortaitWidth,
          height: iPhoneXPortraitHeight,
        };
      });

      expect(isIPhoneX()).toEqual(true);
    });

    it('when the device is an iPhoneX in portait', () => {
      Platform.getType = jest.fn(() => {
        return 'ios';
      });
      UserInterface.measureWindow = jest.fn(() => {
        return {
          width: iPhoneXPortraitHeight,
          height: iPhoneXPortaitWidth,
        };
      });

      expect(isIPhoneX()).toEqual(true);
    });
  });
});
