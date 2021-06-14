import * as React from 'react';
import { PropTypes } from 'prop-types';

function Arrow({ ...props }) {
    return (
        <svg width={18} height={30} viewBox="0 0 18 30" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.122 15L17.06 3.06 14.94.94.879 15l14.06 14.06 2.122-2.12L5.12 15z"
            />
        </svg>
    );
}

Arrow.prototypes = {
    fill: PropTypes.string,
};

Arrow.defaultProps = {
    fill: '#0000FF',
};

export default Arrow;
