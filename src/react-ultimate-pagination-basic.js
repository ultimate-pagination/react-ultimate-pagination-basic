import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';

const activePageStyle = {fontWeight: 'bold'};

const Page = ({value, isActive, onClick}) => (
  <button style={isActive ? activePageStyle : null} onClick={onClick}>{value}</button>
);

const Ellipsis = ({onClick}) => (
  <button onClick={onClick}>...</button>
);

const FirstPageLink = ({isActive, onClick}) => (
  <button onClick={onClick}>First</button>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <button onClick={onClick}>Prev</button>
);

const NextPageLink = ({isActive, onClick}) => (
  <button onClick={onClick}>Next</button>
);

const LastPageLink = ({isActive, onClick}) => (
  <button onClick={onClick}>Last</button>
);

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationBasic = createUltimatePagination({itemTypeToComponent});

export default UltimatePaginationBasic;
