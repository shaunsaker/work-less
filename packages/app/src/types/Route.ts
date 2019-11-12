import { RouteProps } from 'react-router-dom';

interface Route extends RouteProps {
  name: string;
  component: React.ComponentType<any>;
  path: string;
}

export default Route;
