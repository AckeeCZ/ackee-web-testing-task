import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Device from './Device';

import { DeviceType } from '../consts';

const Slide = ({ styles, content, textColor, deviceType }) => {
    const {
        image: { src, alt },
        description,
    } = content;

    return (
        <div className={styles.container}>
            <Device src={src} alt={alt || description} />
            <span className={styles.description}>{description && <FormattedMessage id={description} />}</span>
        </div>
    );
};

Slide.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    textColor: PropTypes.oneOf(['#000', '#fff']).isRequired,
    content: PropTypes.shape({
        image: {
            src: PropTypes.string,
            alt: PropTypes.string,
        },
        description: PropTypes.string,
    }).isRequired,
    deviceType: PropTypes.oneOf(Object.values(DeviceType)).isRequired,
};

export default Slide;
