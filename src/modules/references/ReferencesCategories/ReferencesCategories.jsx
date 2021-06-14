import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../ui';
import * as Constants from '../../../constants';

import ReferencesCategoriesItem from './ReferencesCategoriesItem';

const { DynamicContainer } = UI;

const ReferencesCategories = ({ styles, rules, setActiveCategory, activeCategory }) => (
    <DynamicContainer extend={rules.extendContainer}>
        {React.useMemo(
            () =>
                Object.keys(Constants.categories).map(key => (
                    <ReferencesCategoriesItem
                        key={key}
                        onClick={() => setActiveCategory(Constants.categories[key])}
                        category={key}
                        isActive={activeCategory === Constants.categories[key]}
                    />
                )),
            [activeCategory, setActiveCategory],
        )}
    </DynamicContainer>
);

ReferencesCategories.propTypes = {
    styles: PropTypes.shape({}).isRequired,
};

export default ReferencesCategories;
