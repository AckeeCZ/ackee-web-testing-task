import React from 'react';
import { PropTypes } from 'prop-types';

const Divider = ({ styles }) => <div className={styles.container} />;

Divider.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Divider;
