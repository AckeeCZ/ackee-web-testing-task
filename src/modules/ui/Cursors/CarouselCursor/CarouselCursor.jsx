import React from 'react';
import { PropTypes } from 'prop-types';

const CarouselCursor = ({ styles, ...props }) => (
    <svg viewBox="0 0 40 65" {...props}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(0.000000, 1.000000)" className={styles.gMain}>
                <polygon points="7.87387228 0 0 7.72029145 24.2527616 31.5004963 0 55.2802048 7.87387228 63 40 31.5004963" />
            </g>
        </g>
    </svg>
);

CarouselCursor.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
};

CarouselCursor.defaultProps = {
    fill: '#FFFFFF',
    stroke: '#0000FF',
};

export default CarouselCursor;
