import Home from '../pages/Home';
import SelectCountry from '../pages/SelectCountry';
import InputLeaveDays from '../pages/InputLeaveDays';
import Results from '../pages/Results';
import Route from './types/Route';

interface Routes {
  [key: string]: Route;
}

const routes: Routes = {
  home: {
    component: Home,
    path: '/',
    id: 0,
    default: true,
  },
  selectCountry: {
    component: SelectCountry,
    path: '/select-country',
    id: 1,
  },
  inputLeaveDays: {
    component: InputLeaveDays,
    path: '/input-leave-days',
    id: 2,
  },
  results: {
    component: Results,
    path: '/results',
    id: 3,
  },
};

export default routes;
