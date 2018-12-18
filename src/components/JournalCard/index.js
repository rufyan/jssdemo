import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';
import GraphQLData from '../../lib/GraphQLData';
import { JournalCardQuery } from './query.graphql';

const JournalCard = (props) => {  
  const graphQLResult = props.connectedQuery;

  // Query results load in using the name of their root field (see query.graphql)
  const { contextItem } = graphQLResult;

return (
<main className="layout-journal-index ">
  <section className="full overflow">
    {contextItem && (
    <section className="journal-items">
      {contextItem.children.map((child) => (
        <div key={child.id}>
          {child.children[0].children.map((child3) => (
            <article key={child.id}>
                <div key={child3.id}>
                  <span>— <Text field={child3.tag}/> —</span>
                  <h1>
                    <RouterLink to={child.url} className="with-arrow">
                      {child.pageTitle.value}
                    </RouterLink>
                  </h1>
                </div>
                <RouterLink to={child.url} key={child.id}>
                  <Image media={child3.heroImage} /> 
                </RouterLink>
            </article>
          )
          )}
        </div>
      ))}
    </section>
  )}

{/* <pre>
{JSON.stringify(props.sitecoreContext, null, 2)}
</pre> */}
  </section>
</main>
);
}
export default GraphQLData(JournalCardQuery, { name: 'connectedQuery' })(JournalCard);
