import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Item = (props) => (
  <div>
    <p>Item Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Item;
