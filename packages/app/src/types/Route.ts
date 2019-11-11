interface Route {
  name: string;
  component: any;
  path: string;
  id: number;
  default?: boolean; // Not sure if this actually works - it's supposed to be a "catch all" route
}

export default Route;
