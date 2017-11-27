import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <a href={props.homeUrl}>{props.title}</a>
    </header>
  );
};

export default Header;
