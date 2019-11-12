import React from 'react';

import Layout from '../../components/Layout';

export interface Props {
  message: string;
  handleReloadPress: () => void;
  handleFooterLinkPress: Function;
}

const Error: React.FC<Props> = ({ message, handleReloadPress, handleFooterLinkPress }) => {
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
      handleFooterLinkPress={handleFooterLinkPress}
    />
  );
};

export default Error;
