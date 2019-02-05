import PropTypes from 'prop-types';
import React from 'react';

const Level = React.createContext(1);

export function Section(props) {
  return (
    <Level.Consumer>
      {(level) => (
        <Level.Provider value={level + 1}>{props.children}</Level.Provider>
      )}
    </Level.Consumer>
  );
}

Section.propTypes = {
  children: PropTypes.node
};

export function H(props) {
  return (
    <Level.Consumer>
      {(level) => {
        const Heading = `h${Math.min(level, 6)}`;
        return <Heading {...props} />;
      }}
    </Level.Consumer>
  );
}
