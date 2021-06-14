import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as UI from '../../../ui';
import Config from '../../../../config';
import Container from '../Container';

import { headerThemePropType } from '../CaseHeader';

const { FormattedMessageWithLinks, LocalizedLink } = UI;

// TODO: Logic here is simple even though layout in figma seems to offer very much possibility
// There is always sectionTitle, Title is optional.
// if columns = 2 you display text in 2 columns and dont display the category/outputs
// if outputs and category are set display them (if columns != 2)
// if title and outputs not presented display large text
const TextContent = ({ styles, rules, content, background, headerTheme }) => (
    <Container isFluid background={background} headerTheme={headerTheme} extend={{ container: rules.mainContainer }}>
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <span className={styles.sectionTitle}>
                    <FormattedMessage id={content.section} />
                </span>
                <span className={styles.title}>
                    <FormattedMessage id={content.title} />
                </span>
                <div className={styles.mainText}>
                    <FormattedMessageWithLinks id={content.text} />
                </div>
            </div>
            {content.outputs && (
                <div className={styles.outputsContainer}>
                    <span className={styles.sectionTitle}>&nbsp;</span>
                    <span className={styles.subSection}>
                        <FormattedMessage id={'references.case.outputs'} />
                    </span>
                    {content.outputs.map(item => (
                        <span key={item} className={styles.outputs}>
                            <FormattedMessage id={item} />
                        </span>
                    ))}
                    {content.category && (
                        <div className={styles.subContainer}>
                            <span className={styles.subSection}>
                                <FormattedMessage id={'references.case.category'} />
                            </span>
                            <LocalizedLink className={styles.categoryLink} to={Config.routes['/references'] || '/'}>
                                <FormattedMessage id={content.category} />
                            </LocalizedLink>
                        </div>
                    )}
                </div>
            )}
        </div>
    </Container>
);

TextContent.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.string,
    content: PropTypes.shape({
        section: PropTypes.string.isRequired,
        title: PropTypes.string,
        text: PropTypes.string.isRequired,
        outputs: PropTypes.arrayOf(PropTypes.string.isRequired),
        category: PropTypes.string,
        categoryURL: PropTypes.string,
    }),
    rules: PropTypes.shape().isRequired,
    ...headerThemePropType,
};

TextContent.defaultProps = {
    columns: 1,
    background: 'white',
    textColor: 'black',
    headerTheme: 'dark',
};

export default TextContent;
