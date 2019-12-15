import React from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';
import LatestTweets from 'components/latest-tweets';
import ListDog from 'components/lists/dog';
import ListStaff from 'components/lists/staff';
import { tweetLink } from 'utils/links';
import styles from './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <DataSearch
          autosuggest={true}
          className="searchSuggestions"
          componentId="search-suggestions"
          dataField="text"
          placeholder="Quick search..."
          onValueSelected={(value, cause, source) => {
            if (source) window.open(tweetLink(source.id), '_blank');
          }}
          queryFormat="and"
          searchOperators={true}
          showClear={true}
          URLParams={false}
        />
        <LatestTweets/>
        <ListDog/>
        <ListStaff/>
      </div>
    );
  }
}
