import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useIntl } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import favicon16 from '../../static/images/favicon/favicon-16x16.png';
import favicon32 from '../../static/images/favicon/favicon-32x32.png';
import faviconApple from '../../static/images/favicon/apple-touch-icon.png';
import maskIcon from '../../static/images/favicon/safari-pinned-tab.svg';

function Seo({ pageId, image, lang, meta, link }) {
    const intl = useIntl();
    const { formatMessage } = intl;
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        image
                        siteUrl
                    }
                }
            }
        `,
    );

    const metaTitle = pageId ? formatMessage({ id: `meta.title.${pageId}` }) : site.siteMetadata.title;
    const metaDescription = pageId
        ? formatMessage({ id: `meta.description.${pageId}` })
        : site.siteMetadata.description;
    const baseUrl = site.siteMetadata.siteUrl;
    const metaImage = image || site.siteMetadata.image;
    const htmlLang = lang || intl.locale;

    const links = [
        { rel: 'image_src', type: 'image/png', href: `${metaImage}` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${faviconApple}` },
        { rel: 'mask-icon', color: '#0000ff', href: `${maskIcon}` },
    ].concat(link || [{}]);

    return (
        <Helmet
            htmlAttributes={{
                lang: htmlLang,
            }}
            title={metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: `${baseUrl}${metaImage}`,
                },
                {
                    property: `og:image:type`,
                    content: 'image/png',
                },
                {
                    property: `og:image:width`,
                    content: '600',
                },
                {
                    property: `og:image:height`,
                    content: '400',
                },
                {
                    property: `og:locale`,
                    content: htmlLang,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `Ackee`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
            link={links}
        />
    );
}

Seo.propTypes = {
    pageId: PropTypes.string,
    lang: PropTypes.string,
    image: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
};

Seo.defaultProps = {
    meta: [],
    image: '',
    lang: undefined,
    pageId: undefined,
};

export default Seo;
