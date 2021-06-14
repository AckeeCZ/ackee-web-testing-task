import React from 'react';
import { PropTypes } from 'prop-types';

const MainCursor = ({ styles }) => {
    return (
        <svg width="1em" height="1em" viewBox="0 0 36 36" className={styles.mainCursor}>
            <path
                d="M1 1l14.024 33.945 4.505-15.427 14.546-3.895z"
                strokeWidth={2}
                fillRule="evenodd"
                strokeLinejoin="round"
            />
        </svg>
    );
};

MainCursor.propTypes = {
    styles: PropTypes.shape().isRequired,
};

export default MainCursor;
