declare const __DEV__: boolean;

export const DEBUG = __DEV__;
export const DEV = __DEV__;
export const DOMAIN = DEV
  ? 'https://work-less-development.firebaseapp.com'
  : 'https://work-less-production.firebaseapp.com';
