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
    exact: true,
    path: '/',
  },
  selectCountry: {
    name: 'Select Country',
    component: SelectCountry,
    path: '/select-country',
  },
  inputLeaveDays: {
    name: 'Leave Days',
    component: InputLeaveDays,
    path: '/input-leave-days',
  },
  results: {
    name: 'Results',
    component: Results,
    path: '/results',
  },
  support: {
    name: 'Support',
    component: Home, // TODO:
    path: '/',
  },
  terms: {
    name: 'Terms',
    component: Home, // TODO:
    path: '/',
  },
  privacy: {
    name: 'Privacy',
    component: Home, // TODO:
    path: '/',
  },
};

export default routes;
