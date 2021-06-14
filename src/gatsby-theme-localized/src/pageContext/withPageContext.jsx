import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';

import PageContext from './PageContext';

import '../i18n/config/reactIntl';

import { getDisplayName } from '../utils';

const withPageContext = Component => {
    const WrapperComponent = props => {
        const [locale, setLocale] = useState(props.pageContext.locale);

        const { intlMessages, ...pageContext } = props.pageContext;

        return (
            <IntlProvider locale={locale} messages={intlMessages}>
                <PageContext.Provider value={pageContext}>
                    <Component {...props} setLocale={setLocale} />
                </PageContext.Provider>
            </IntlProvider>
        );
    };
    WrapperComponent.displayName = `PageContext(${getDisplayName(Component)})`;
    return WrapperComponent;
};

withPageContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withPageContext;
