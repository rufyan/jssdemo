import React from 'react';

const JournalTagCollection = (props) => {
  const journalTagCollection = props.fields.tags;

  return (  
    <div className="filter-">					
      <div className="desktop-only">
        <span>Filter by:</span>
        <span className="clear-filters state-active">Show All</span>
        {journalTagCollection &&
          journalTagCollection.map((item, index) => (
            <div key={`journaltag-${index}`} data-tag={item.fields.dataTag.value} className="journal-tag"
            onClick={() => ({filtertags: item.fields.dataTag.value})}

            >
              {item.fields.text.value}
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default JournalTagCollection;
