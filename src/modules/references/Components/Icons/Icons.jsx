import React from 'react';
import { PropTypes } from 'prop-types';

const Icons = ({ styles, content, background }) => <div className={styles.container}></div>;

Icons.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
        file: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    background: PropTypes.string.isRequired,
};

export default Icons;
