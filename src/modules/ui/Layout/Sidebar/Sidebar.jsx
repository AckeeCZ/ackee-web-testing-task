import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ styles, children }) => <div className={styles.container}>{children}</div>;

Sidebar.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Sidebar;
