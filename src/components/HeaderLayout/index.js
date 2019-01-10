import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import Text from  '@sitecore-jss/sitecore-jss-react';

/**
 * The main layout (columns) of the styleguide.
 * Navigation is automatically generated based on the components added to the layout,
 * and does not need to be manually maintained.
 */
const HeaderLayout = (props) => {
  return (
    <section className="header-color layout-journal-index">
    <div className="layout-news-index intro">
      <header>
      {/* <Text field={props.fields.title} tag="h1" /> */}
        <div>
        <Placeholder name="header-layout" rendering={props.rendering} />
        </div>
      </header>
    </div>
    </section>
  );
};

export default HeaderLayout;
