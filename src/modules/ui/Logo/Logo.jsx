import React from 'react';
import PropTypes from 'prop-types';
import LocalizedLink from '../LocalizedLink';

import LogoSVG from './LogoSVG';

const Logo = ({ styles, rules, link }) => (
    <div className={styles.container}>
        {link ? (
            <LocalizedLink aria-label="Ackee logo" to="/" extend={{ link: rules.link }}>
                <LogoSVG className={styles.logo} />
            </LocalizedLink>
        ) : (
            <LogoSVG className={styles.logo} />
        )}
    </div>
);

Logo.propTypes = {
    styles: PropTypes.shape({
        logo: PropTypes.string.isRequired,
    }).isRequired,
    rules: PropTypes.shape().isRequired,
    link: PropTypes.bool,
};

Logo.defaultProps = {
    source: undefined,
    link: false,
    logoColors: {
        background: '#0000FF',
        text: '#fff',
        border: '#0000FF',
    },
};

export default Logo;
