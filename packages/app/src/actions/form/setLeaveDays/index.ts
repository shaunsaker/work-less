import { state } from '../../../model';

const setLeaveDays = (leaveDays: number) => {
  state.form.leaveDays = leaveDays;
};

export default setLeaveDays;
