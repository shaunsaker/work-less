export interface UserState {
  authenticated: boolean;
}

const initialState: UserState = {
  authenticated: false,
};

export default initialState;
