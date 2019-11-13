export type Message = string;

export enum SnackbarActionTypes {
  SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE',
  RESET_SNACKBAR_MESSAGE = 'RESET_SNACKBAR_MESSAGE',
}

export interface SnackbarState {
  readonly message: Message | undefined;
}
