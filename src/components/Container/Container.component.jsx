import React from 'react';
import PropTypes from 'prop-types';

function Container({ navbar, page }) {
  return (
    <>
      {navbar()}
      {page()}
    </>
  );
}

Container.propTypes = {
  navbar: PropTypes.elementType.isRequired,
  page: PropTypes.elementType.isRequired,
};

export default Container;
