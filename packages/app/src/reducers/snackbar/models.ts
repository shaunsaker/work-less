export type Message = string;

export interface State {
  message: Message;
}

export interface Action {
  type: string;
  payload: {
    message: Message;
  };
}
