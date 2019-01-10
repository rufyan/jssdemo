import React from 'react';

const JournalTagCollection = (props) => {
  const journalTagCollection = props.fields.tags;

  return (  
    <section className="header-color layout-journal-index">
    <div className="layout-news-index intro">
      <header>
        <h1>Journal</h1>
          <div className="filter-holder">					
      <div className="desktop-only">
        <span>Filter by:</span>
        <a className="clear-filters state-active">Show All</a>
        {journalTagCollection &&
          journalTagCollection.map((item, index) => (
            <a key={`journaltag-${index}`} data-tag={item.fields.dataTag.value} className="journal-tag"
            onClick={() => ({filtertags: item.fields.dataTag.value})}
            >
              {item.fields.text.value}
            </a>
          ))
        }
      </div>
    </div>
    </header>
    </div>
    </section>
  );
};
export default JournalTagCollection;
