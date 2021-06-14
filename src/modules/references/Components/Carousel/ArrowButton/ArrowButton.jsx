import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../../../ui';

import { ArrowButtonType } from './consts';

const {
    Cursors: { CarouselCursor: ArrowIcon },
} = UI;

const ArrowButton = ({ styles, className, onClick, theme, type }) => (
    <button
        className={`${className} ${
            type === ArrowButtonType.LEFT ? styles.navigationButtonLeft : styles.navigationButton
        }`}
        onClick={onClick}
        type="button"
    >
        <ArrowIcon fill={theme.colors.white} stroke={theme.colors.blue} />
    </button>
);

ArrowButton.propTypes = {
    styles: PropTypes.shape().isRequired,
    type: PropTypes.oneOf(Object.values(ArrowButtonType)).isRequired,
    onClick: PropTypes.func,
    theme: PropTypes.shape().isRequired,
};

ArrowButton.defaultProps = {
    onClick: null,
};

export default ArrowButton;
