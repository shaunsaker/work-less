import React from 'react';

const withCountries = <Props extends object>(Component: React.ComponentType<Props>) => {
  const WithCountries: React.FC<Props> = (props) => {
    /*
     * TODO: Get the countries
     * TODO: Set the countries in the store
     */

    return <Component {...props} />;
  };

  return WithCountries;
};

export default withCountries;
