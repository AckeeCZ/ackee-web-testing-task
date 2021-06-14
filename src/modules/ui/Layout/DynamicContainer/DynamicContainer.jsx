import React from 'react';
import PropTypes from 'prop-types';

const DynamicContainer = ({ styles, children, as, reference, onMouseEnter, onMouseLeave, dark, id }) =>
    React.createElement(as, { className: styles.container, ref: reference, onMouseEnter, onMouseLeave, id }, children);

DynamicContainer.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    as: PropTypes.string,
    // eslint-disable-next-line
    columns: PropTypes.number,
    // eslint-disable-next-line
    xsColumns: PropTypes.number,
    // eslint-disable-next-line react/no-unused-prop-types
    justify: PropTypes.string,
    reference: PropTypes.shape({}),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    dark: PropTypes.bool,
};

DynamicContainer.defaultProps = {
    columns: 12,
    xsColumns: 12,
    children: null,
    justify: undefined,
    as: 'div',
    reference: null,
    onMouseEnter: null,
    onMouseLeave: null,
    dark: false,
};

export default DynamicContainer;
