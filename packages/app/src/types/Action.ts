interface Action {
  type: string;
  payload?: object;
  meta?: object;
}

export default Action;
