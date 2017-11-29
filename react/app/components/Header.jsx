import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <a href={props.homeUrl}>{props.title}</a>
    </header>
  );
};

Header.propTypes = {
  homeUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
