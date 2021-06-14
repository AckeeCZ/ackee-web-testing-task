import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as UI from '../ui';
import { InquirySection } from '../inquiry';

import Hero from '../hero-section';
import ReferencesList from './ReferencesList/index';

const { TitleTypes } = UI;

const ReferencesPage = () => {
    return (
        <>
            <Hero
                title={<FormattedMessage id="references.hero.title" />}
                titleAs={TitleTypes.H1}
                sectionTitle={<FormattedMessage id="references.hero.sectionTitle" />}
                description={<FormattedMessage id="references.hero.description" />}
            />
            <ReferencesList />
            <InquirySection />
        </>
    );
};

export default ReferencesPage;
