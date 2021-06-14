import React from 'react';

// import { LanguageSwitcher as Switcher } from 'gatsby-theme-localized';

import Config from '../../../config';
import { PropTypes } from 'prop-types';

import CustomSwitch from './CustomSwitch';

const { links } = Config;

const IS_DE_LANG_ENV = false;

const customLanguages = ['cs', 'en'];

const LanguageSwitcher = ({ styles, inNavigation }) => {
    const renderCustomSwitcher = ({ lang, isCurrent, path }) => (
        <CustomSwitch
            lang={lang}
            inNavigation={inNavigation}
            key={lang.label}
            isCurrent={isCurrent}
            path={path || links[`${lang.locale}Home`]}
        />
    );

    return (
        <div className={styles.container}>
            {IS_DE_LANG_ENV ? (
                <>
                    {customLanguages.map(language => (
                        <CustomSwitch
                            key={language}
                            lang={{ label: language.toLocaleUpperCase() }}
                            inNavigation={inNavigation}
                            isCurrent={false}
                            path={links[`${language}Home`]}
                        />
                    ))}
                    <span>Placeholder</span>
                </>
            ) : (
                <>
                    <span>Placeholder</span>
                    <CustomSwitch
                        lang={{ label: 'DE' }}
                        inNavigation={inNavigation}
                        isCurrent={false}
                        path={links.deHome}
                    />
                </>
            )}
        </div>
    );
};

LanguageSwitcher.propTypes = {
    styles: PropTypes.shape().isRequired,
    inNavigation: PropTypes.bool.isRequired,
};

export default LanguageSwitcher;
