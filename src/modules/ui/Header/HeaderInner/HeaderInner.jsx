import { theme } from 'gatsby-theme-fela';

import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { hooks } from '../../../../../utils';

import Logo from '../../Logo';
import Burger from '../../Burger';
import MainNavigation, { content } from '../../MainNavigation';
import LocalizedLink from '../../LocalizedLink';
import { Arrow } from '../../Icons';

import { HeaderType } from '../consts';

const { navigation } = content;

const navWithoutHome = navigation.links.filter(item => item.href !== '/');

// active className for links is not safe, hence we have to use style
const activeStyle = {
    color: theme.colors.fuchsia,
    border: 'none',
    cursor: 'default',
};

const { useEscapeKey } = hooks;

const handleBackButtonClick = () => {
    if (window) {
        window.history.back();
    }
};

const Header = ({ styles, isSticky, type, logoColors, burgerColors, backButtonColors }) => {
    const [navigationVisible, setNavigationVisible] = useState(false);
    const [renderMenuLinks, setRenderMenuLinks] = useState(true);

    React.useEffect(() => {
        // wait for css transition then unmnout
        const unmountLangSwitcher = () => {
            setTimeout(() => {
                setRenderMenuLinks(false);
            }, 300);
        };

        isSticky ? unmountLangSwitcher() : setRenderMenuLinks(true);
    }, [isSticky]);

    const openMenu = React.useCallback(() => {
        setNavigationVisible(true);
    }, []);

    const closeMenu = React.useCallback(() => {
        setNavigationVisible(false);
    }, []);

    useEscapeKey(closeMenu);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    {type === HeaderType.CASE_STUDY && (
                        <button onClick={handleBackButtonClick} className={styles.backButton} type="button">
                            <Arrow className={styles.arrow} />
                        </button>
                    )}
                    <Logo logoColors={logoColors} link />
                </div>
                <div className={styles.row}>
                    {type === HeaderType.NORMAL && (
                        <div className={styles.linksWrapper}>
                            {renderMenuLinks &&
                                navWithoutHome.map(link => (
                                    <li key={link.id} className={styles.bigLinkItem}>
                                        <LocalizedLink
                                            to={link.href}
                                            activeStyle={activeStyle}
                                            className={styles.bigLink}
                                        >
                                            <FormattedMessage id={link.id} />
                                            {' >'}
                                        </LocalizedLink>
                                    </li>
                                ))}
                        </div>
                    )}
                    <Burger burgerColors={burgerColors} isSticky={isSticky} openMenu={openMenu} />
                </div>
            </div>

            <MainNavigation isMenuVisible={navigationVisible} closeMenu={closeMenu} />
        </>
    );
};

Header.propTypes = {
    styles: PropTypes.shape().isRequired,
    isSticky: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.values(HeaderType)),
    backButtonColors: PropTypes.shape(),
    logoColors: PropTypes.shape(),
    burgerColors: PropTypes.shape(),
};

Header.defaultProps = {
    type: HeaderType.NORMAL,
    backButtonColors: {
        background: 'transparent',
        icon: '#0000FF',
        border: '#0000FF',
    },
    logoColors: {
        background: '#0000FF',
        text: '#fff',
        border: '#0000FF',
    },
    burgerColors: {
        background: '#0000FF',
        text: '#FF00FF',
        icon: '#0000FF',
        border: '#0000FF',
    },
};

export default Header;
