import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ styles, children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Container;
