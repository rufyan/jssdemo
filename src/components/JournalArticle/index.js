import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const JournalArticle = (props) => {
  const journalTagCollection = props.fields.tagList;

    return (  
      <main className="layout-journal-post component">
      <section className="full overflow">		
        <article>
        <header>
        <h1><Text field={props.fields.heading} /></h1>
        {journalTagCollection &&
          journalTagCollection.map((item, index) => (
            <span>- 
              {item.fields.text.value}
            -</span>
          ))
        }
        <Image media={props.fields.heroImage}/> 
        
        </header>
        <div className="journal-main">
        <RichText field={props.fields.content} />
        </div>
        <footer>
        <NavLink to="/journal">Back</NavLink>

        <ul className="share-links">
        <li>share this:</li>
        <li><Link className="with-arrow" field={props.fields.socialFb} target="_blank"></Link></li>
        <li><Link className="with-arrow" field={props.fields.socialLi} target="_blank"></Link></li>
        <li><Link className="with-arrow" field={props.fields.socialTw} target="_blank"></Link></li>
        </ul>
        </footer>
        </article>
      </section>
      </main>
    );
  }

export default JournalArticle;
