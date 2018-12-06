import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MySecondComponent = (props) => (
  <div>
    <p>MySecondComponent Component</p>
    <Text field={props.fields.heading} />
    <Text field={props.fields.text} />
  </div>
);

export default MySecondComponent;
