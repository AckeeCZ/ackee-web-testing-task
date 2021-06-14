import React from 'react';
import { Link } from 'gatsby';

import Config from '../../../../config';
import { PropTypes } from 'prop-types';

const { links } = Config;

const linkValues = Object.values(links);

const CustomSwitch = ({ styles, lang, isCurrent, path }) => {
    if (path) {
        const isExternal = linkValues.some(value => path.includes(value));

        if (!isCurrent) {
            // check if links are external
            if (isExternal) {
                return (
                    <a key={lang.label} href={path} className={styles.menuItemLink}>
                        <span className={styles.menuItem}>{lang.label}</span>
                    </a>
                );
            }

            return (
                <Link key={lang.label} to={path} className={styles.menuItemLink}>
                    <span className={styles.menuItem}>{lang.label}</span>
                </Link>
            );
        }
    }

    return (
        <span className={styles.menuItem} key={lang.label}>
            {lang.label}
        </span>
    );
};

CustomSwitch.propTypes = {
    styles: PropTypes.shape().isRequired,
    lang: PropTypes.shape().isRequired,
    isCurrent: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    label: PropTypes.string,
};

CustomSwitch.defaultProps = {
    label: undefined,
};

export default CustomSwitch;
