import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../ui';
import { FormattedMessage } from 'react-intl';
import Img from '../Img';

const { DynamicContainer, LazyLoadContainer, Title, TitleTypes, Text, TextTypes, LocalizedLink } = UI;

const ReferencesListItem = ({ styles, rules, reference }) => {
    return (
        <DynamicContainer columns={6} xsColumns={12}>
            <LazyLoadContainer lazyLoaded animTimeout={200}>
                <DynamicContainer extend={rules.extendContainer} columns={6}>
                    <LocalizedLink to={reference.link} className={styles.link}>
                        <Img src={reference.image} alt={reference.title} />
                        <Title type={TitleTypes.H4} as={TitleTypes.H2} extend={rules.extendTitle}>
                            <FormattedMessage id={reference.title} />
                        </Title>
                        <Text type={TextTypes.LARGE} extend={rules.extendText}>
                            <FormattedMessage id={reference.description} />
                        </Text>
                        <Title as={TitleTypes.H3} extend={rules.extendCategoryTitle}>
                            <FormattedMessage id={`category.${reference.category}`} />
                        </Title>
                    </LocalizedLink>
                </DynamicContainer>
            </LazyLoadContainer>
        </DynamicContainer>
    );
};

ReferencesListItem.propTypes = {
    styles: PropTypes.shape({}).isRequired,
};

export default ReferencesListItem;
