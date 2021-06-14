import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ styles, children }) => <main className={styles.container}>{children}</main>;

Main.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Main;
