import React from 'react';
import { PropTypes } from 'prop-types';
import { useIntl } from 'react-intl';

import Image from '../../../Image';

const Device = ({ styles, src, alt }) => {
    const { formatMessage } = useIntl();
    const localizedAlt = alt ? formatMessage({ id: alt }) : '';

    return (
        <div className={styles.container}>
            <Image src={src} imgStyle={{ objectFit: 'contain' }} alt={localizedAlt} />
        </div>
    );
};
Device.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Device;
