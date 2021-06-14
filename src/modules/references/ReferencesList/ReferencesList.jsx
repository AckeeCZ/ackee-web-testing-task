import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../ui';
import * as Constants from '../../../constants';
import Config from '../../../config';
import { FormattedMessage, useIntl } from 'react-intl';
import ReferencesListItem from '../ReferencesListItem';
import ReferencesCategories from '../ReferencesCategories';
import { references } from '../content';

const { DynamicContainer, ContainerTypes, LocalizedLink } = UI;

const ReferencesList = ({ styles, rules }) => {
    const { locale } = useIntl();

    const [activeCategory, setActiveCategory] = React.useState(Constants.categories.ALL);
    const [activeContent, setActiveContent] = React.useState(references[locale]);

    React.useEffect(() => {
        if (activeCategory === Constants.categories.ALL) {
            setActiveContent(references[locale]);
        } else {
            const filteredContent = references.filter(item => item.category === activeCategory);
            setActiveContent(filteredContent[locale]);
        }

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory]);

    return (
        <DynamicContainer isFluid extend={rules.extendContainer}>
            <ReferencesCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <DynamicContainer type={ContainerTypes.GRID}>
                {activeContent.map(item => (
                    <ReferencesListItem key={item.id} reference={item} />
                ))}
            </DynamicContainer>
            <LocalizedLink className={styles.link} to={Config.routes['/references/archive']}>
                <FormattedMessage id="references.archive.link" />
            </LocalizedLink>
        </DynamicContainer>
    );
};

ReferencesList.propTypes = {
    styles: PropTypes.shape({}).isRequired,
};

export default ReferencesList;
