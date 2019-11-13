import React from 'react';

import Layout from '../../components/Layout';

export interface Props {
  message: string;
  handleReloadPress: () => void;
}

const Error: React.FC<Props> = ({ message, handleReloadPress }) => {
  return (
    <Layout
      titleText="Error"
      paragraphText={message}
      imageSource="error"
      alignCenter
      buttons={[
        {
          text: 'Reload',
          handlePress: handleReloadPress,
        },
      ]}
    />
  );
};

export default Error;
