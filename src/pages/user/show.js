import React from 'react';
import {
  SimpleShowLayout,
  Show,
} from 'react-admin';

import attributes from 'components/attributes';

const UserShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        {attributes()}
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;