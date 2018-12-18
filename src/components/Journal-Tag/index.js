import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const JournalTag = ({fields: {text, dataTag}}) => (  
      <Text field={text}>{text}</Text>
      //<span data-tag={props.field.dataTag}>{props.field.text}</span>
);

export default JournalTag;
