const path = require('path');

const siteURL = `https://www.ackee.cz`;

module.exports = {
    siteMetadata: {
        title: `Agentura pro vývoj mobilních a webových aplikací | Ackee`,
        description: `Vyvíjíme mobilní aplikace, vytváříme weby, analyzujeme data. Náš kvalitní in-house tým patří k technologické špičce v ČR. Projděte si naše reference!`,
        author: `Ackee s.r.o.`,
        image: '/images/img_ackee_share.png',
        siteUrl: siteURL,
    },
    plugins: [
        `gatsby-plugin-preload-fonts`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-theme-fela',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: siteURL,
                sitemap: `${siteURL}/sitemap.xml`,
                resolveEnv: () => process.env.GATSBY_ENV,
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                    },
                    production: {
                        // TODO - change it when goes to production
                        policy: [{ userAgent: '*', allow: ['/'] }],
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: siteURL,
            },
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    modules: path.resolve(__dirname, 'src/modules'),
                    src: path.resolve(__dirname, 'src'),
                },
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`cs`, `en`],
                defaultLanguage: `cs`,
                redirect: true,
            },
        },
    ],
};
