import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Burger = ({ styles, openMenu }) => (
    <button type="button" aria-label="menu" className={styles.container} onClick={openMenu}>
        <div className={styles.firstLine} />
        <div className={styles.line} />
        <span className={styles.more}>
            <FormattedMessage id="mainNavigation.burger.more" />
        </span>
    </button>
);

Burger.propTypes = {
    openMenu: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
        line: PropTypes.string.isRequired,
        firstLine: PropTypes.string.isRequired,
    }).isRequired,
};

export default Burger;
