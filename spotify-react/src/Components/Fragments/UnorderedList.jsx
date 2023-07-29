import React from 'react';
import List from '../Elements/List';

const UnorderedList = () => {
  return (
    <ul>
      <List isActive={true} title='Home' icon='ri-home-line' href='#' />
      <List isActive={false} title='Search' icon='ri-search-line' href='#' />
      <List isActive={false} title='Your Library' icon='ri-stack-line' href='#' />
    </ul>
  );
};

export default UnorderedList;
