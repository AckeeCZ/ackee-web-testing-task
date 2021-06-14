import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Constants from '../../../../constants';

const ReferencesCategoriesItem = ({ styles, category, onClick }) => (
    <button onClick={onClick} type="button" className={styles.button}>
        <FormattedMessage id={`category.${Constants.categories[category]}`} />
    </button>
);

ReferencesCategoriesItem.propTypes = {
    styles: PropTypes.shape().isRequired,
    category: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ReferencesCategoriesItem;
