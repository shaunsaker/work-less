import Home from '../pages/Home';
import SelectCountry from '../pages/SelectCountry';
import InputLeaveDays from '../pages/InputLeaveDays';
import Results from '../pages/Results';

interface Routes {
  [key: string]: {
    component: any;
    url: string;
    id: number;
  };
}

const routes: Routes = {
  home: {
    component: Home,
    url: '/',
    id: 0,
  },
  selectCountry: {
    component: SelectCountry,
    url: '/select-country',
    id: 1,
  },
  inputLeaveDays: {
    component: InputLeaveDays,
    url: '/input-leave-days',
    id: 2,
  },
  results: {
    component: Results,
    url: '/results',
    id: 3,
  },
};

export default routes;
