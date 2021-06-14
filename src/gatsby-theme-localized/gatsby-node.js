/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { getLocalizedPath } = require('./src/i18n');

const languages = require('../site/src/gatsby-theme-localized/i18n/translations');

exports.onCreatePage = ({ page, actions }, themeOptions) => {
    const { createPage, deletePage } = actions;

    if (page.internalComponentName === 'ComponentDev404Page') {
        return;
    }

    if (page.context.isCustomPage) {
        return;
    }

    // eslint-disable-next-line
    return new Promise(resolve => {
        deletePage(page);

        if (process.env.NODE_ENV === 'production' && page.path === '/uikit/') {
            resolve();
            return;
        }

        const debug = true;

        themeOptions.languages.forEach(lang => {
            const localizedPath = getLocalizedPath(page.path, lang.locale, themeOptions.languages, debug);
            const localePage = {
                ...page,
                path: localizedPath,
                context: {
                    id: page.context.id,
                    locale: lang.locale,
                    originalPath: page.path,
                    languages: themeOptions.languages,
                    intlMessages: languages[lang.locale],
                    positionId: page.context.positionId,
                },
            };
            createPage(localePage);
        });

        resolve();
    });
};

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /canvas/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
