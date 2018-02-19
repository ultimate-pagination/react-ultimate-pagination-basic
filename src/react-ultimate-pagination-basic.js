import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';

const activePageStyle = {fontWeight: 'bold'};

const Page = ({value, isActive, onClick, isDisabled}) => (
  <button
    style={isActive ? activePageStyle : null}
    onClick={onClick}
    disabled={isDisabled}
  >{value}</button>
);

const Ellipsis = ({onClick, isDisabled}) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
  >...</button>
);

const FirstPageLink = ({isActive, onClick, isDisabled}) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
  >First</button>
);

const PreviousPageLink = ({isActive, onClick, isDisabled}) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
  >Prev</button>
);

const NextPageLink = ({isActive, onClick, isDisabled}) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
  >Next</button>
);

const LastPageLink = ({isActive, onClick, isDisabled}) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
  >Last</button>
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
