import Home from '../pages/Home';
import SelectCountry from '../pages/SelectCountry';
import InputLeaveDays from '../pages/InputLeaveDays';
import Results from '../pages/Results';
import Route from '../types/Route';

interface Routes {
  [key: string]: Route;
}

const routes: Routes = {
  home: {
    name: 'Home',
    component: Home,
    path: '/',
    id: 0,
    default: true,
  },
  selectCountry: {
    name: 'Select Country',
    component: SelectCountry,
    path: '/select-country',
    id: 1,
  },
  inputLeaveDays: {
    name: 'Leave Days',
    component: InputLeaveDays,
    path: '/input-leave-days',
    id: 2,
  },
  results: {
    name: 'Results',
    component: Results,
    path: '/results',
    id: 3,
  },
  support: {
    name: 'Support',
    component: Home, // TODO:
    path: '/',
    id: 4,
  },
  terms: {
    name: 'Terms',
    component: Home, // TODO:
    path: '/',
    id: 5,
  },
  privacy: {
    name: 'Privacy',
    component: Home, // TODO:
    path: '/',
    id: 6,
  },
};

export default routes;
