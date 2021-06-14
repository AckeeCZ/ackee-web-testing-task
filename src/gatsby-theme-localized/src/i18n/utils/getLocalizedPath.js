const getLocalizedPath = (originalPath, locale, languages, debug) => {
    const defaultLanguage = languages.find(lang => lang.default);

    if (!defaultLanguage) {
        throw new Error('Default language has to be specified in the language configuration.');
    }

    let keyPath = originalPath.replace(/(\w+)\/$/, '$1');

    // Detect 404
    if (keyPath.match(/^\/?404\/?/gm)) keyPath = 'notFound';

    const lang = languages.find(lang => lang.locale === locale);

    const isDefault = locale === defaultLanguage.locale;
    const localizedPath = lang && lang.routes && lang.routes[keyPath];

    if (!localizedPath && debug) {
        console.warn(
            `Some routes are not available and will result in 404.\n There is no transalation for ${originalPath} in language ${locale}.`,
        );

        return lang.routes.notFound;
    }
    return isDefault ? localizedPath : `/${locale}${localizedPath}`;
};

module.exports = getLocalizedPath;
