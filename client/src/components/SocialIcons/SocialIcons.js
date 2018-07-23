import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mcdevsolutions" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mcdevsolutions" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/martinmacdonald137" style={ { color: colorPrimary } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/martin-macdonald-501a04114" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;