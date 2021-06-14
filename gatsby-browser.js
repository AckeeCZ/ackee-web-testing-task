// gatsby-browser.js
import React from 'react';
import { IntlProvider } from 'react-intl';

import cs from './src/intl/cs.json';
import en from './src/intl/en.json';

const messages = {
    cs,
    en,
};

const getCurrentLocale = () => {
    if (window) {
        const currentUrl = window.location.href;

        return currentUrl.includes('cs') ? 'cs' : 'en';
    }
    return 'cs';
};

const getMessages = locale => messages[locale];

export const wrapRootElement = ({ element }) => {
    const locale = getCurrentLocale();
    const messages = getMessages(locale);
    return (
        <IntlProvider messages={messages} locale={locale}>
            {element}
        </IntlProvider>
    );
};
