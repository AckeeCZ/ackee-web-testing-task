import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { getLocalizedPath, PageContext } from 'gatsby-theme-localized';

// import languages from '../../../gatsby-theme-localized/i18n/config/languages';

// import { AnchorLink } from 'gatsby-plugin-anchor-links';

// TODO: this is just a placeholder copied from another project, you can safely ignore this file

const LocalizedLink = ({ styles, to, activeStyle, handleCarouselHover, anchor, rules, theme, ...props }) => {
    return (
        // <PageContext.Consumer>
        //     {({ locale }) => {
        //         // const localizedTo = getLocalizedPath(to, locale, languages);

        //         // if (handleCarouselHover) {
        //         //     return (
        //         //         <Link
        //         //             onMouseEnter={() => handleCarouselHover(false)}
        //         //             onMouseLeave={() => handleCarouselHover(true)}
        //         //             activeStyle={activeStyle}
        //         //             className={styles.link}
        //         //             {...props}
        //         //             to={localizedTo}
        //         //         />
        //         //     );
        //         // }

        //         // if (anchor) {
        //         //     return (
        //         //         <AnchorLink
        //         //             to={`${localizedTo + anchor}`}
        //         //             activeStyle={activeStyle}
        //         //             className={styles.link}
        //         //             {...props}
        //         //         />
        //         //     );
        //         // }

        //     }}
        // </PageContext.Consumer>
        <Link activeStyle={activeStyle} className={styles.link} {...props} to={to} />
    );
};

LocalizedLink.propTypes = {
    styles: PropTypes.shape().isRequired,
    to: PropTypes.string.isRequired,
    activeStyle: PropTypes.shape(),
    handleCarouselHover: PropTypes.func,
    anchor: PropTypes.string,
};

LocalizedLink.defaultProps = {
    activeStyle: null,
    handleCarouselHover: undefined,
    anchor: undefined,
};

export default LocalizedLink;
