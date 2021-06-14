import { theme } from 'gatsby-theme-fela';

import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { content } from './content';

import LocalizedLink from '../../LocalizedLink';
import DynamicContainer from '../../Layout/DynamicContainer';
import { ContainerTypes } from '../../Layout/constants';

const { navigation, moreLinks } = content;

// active className for links is not safe, hence we have to use style
const activeStyle = {
    color: theme.colors.fuchsia,
};

const MainNavigation = ({ styles, rules }) => {
    const { formatMessage } = useIntl();

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {navigation.links.map(link => (
                    <li key={link.id} className={styles.bigLinkItem}>
                        <LocalizedLink to={link.href || '/'} activeStyle={activeStyle} className={styles.bigLink}>
                            <FormattedMessage id={link.id} />
                        </LocalizedLink>
                    </li>
                ))}
            </ul>
            <p className={styles.sectionTitle}>
                <FormattedMessage id="mainNavigation.moreLinks.title" />
            </p>
            <ul className={styles.listMoreLinks}>
                <DynamicContainer columns={6} type={ContainerTypes.GRID} extend={{ container: rules.moreLinksInner }}>
                    {moreLinks.links1.map(link => (
                        <li key={link.id} className={styles.linkItem}>
                            {link.id === 'mainNavigation.moreLinks.blog' ? (
                                <a href={formatMessage({ id: link.href })} className={styles.link}>
                                    <FormattedMessage id={link.id} />
                                </a>
                            ) : (
                                <LocalizedLink activeStyle={activeStyle} to={link.href || '/'} className={styles.link}>
                                    <FormattedMessage id={link.id} />
                                </LocalizedLink>
                            )}
                        </li>
                    ))}
                </DynamicContainer>
            </ul>
        </div>
    );
};

MainNavigation.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
        sectionTitle: PropTypes.string.isRequired,
        bigLink: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        list: PropTypes.string.isRequired,
        listMoreLinks: PropTypes.string.isRequired,
        column: PropTypes.string.isRequired,
        linkItem: PropTypes.string.isRequired,
        bigLinkItem: PropTypes.string.isRequired,
    }).isRequired,
    rules: PropTypes.shape({
        moreLinksInner: PropTypes.func.isRequired,
    }).isRequired,
};

export default MainNavigation;
