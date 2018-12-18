import React from 'react';
import {RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const HtmlContent = ({ fields }) => (
  <React.Fragment>
    <RichText className={fields.classname.value} field={fields.content} />
  </React.Fragment>
);

export default HtmlContent;