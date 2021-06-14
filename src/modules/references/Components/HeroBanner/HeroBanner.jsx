import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Container from '../Container';
import Image from '../Image';

import { headerThemePropType } from '../CaseHeader';

const HeroBanner = ({ styles, rules, background, content, backgroundImage, headerTheme }) => (
    <Container
        isFluid
        fullHeight
        background={background}
        backgroundImage={backgroundImage}
        headerTheme={headerTheme}
        extend={{ container: rules.mainContainer }}
    >
        <div className={styles.container}>
            <h1 className={styles.titleContainer}>
                <span className={styles.projectName}>
                    <FormattedMessage id={content.projectName} />
                </span>
                &nbsp;–&nbsp;
                <span>
                    <FormattedMessage id={content.projectTitle} />
                </span>
            </h1>
            <div className={styles.subTitleContainer}>
                <div>
                    <span className={styles.subtitle}>
                        <FormattedMessage id={'references.case.hero.year'} />
                    </span>
                    <FormattedMessage id={content.projectYear} />
                </div>
                <div>
                    <span className={styles.subtitleRight}>
                        <FormattedMessage id={'references.case.hero.client'} />
                    </span>
                    <FormattedMessage id={content.client} />
                </div>
            </div>
            {content.image && (
                <Image
                    style={content.image.style}
                    alt={content.image.alt}
                    imgStyle={content.image.imgStyle}
                    src={content.image.src}
                />
            )}
        </div>
    </Container>
);

HeroBanner.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    rules: PropTypes.shape().isRequired,
    background: PropTypes.string.isRequired,
    backgroundImage: PropTypes.shape({}),
    textColor: PropTypes.string,
    content: PropTypes.shape({
        projectName: PropTypes.string.isRequired,
        projectTitle: PropTypes.string.isRequired,
        projectYear: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        image: PropTypes.shape({
            src: PropTypes.string,
            style: PropTypes.shape({}),
            alt: PropTypes.string,
            imgStyle: PropTypes.shape({}),
        }),
    }),
    ...headerThemePropType,
};

HeroBanner.defaultProps = {
    backgroundColor: 'blue',
    textColor: 'white',
    ackeeHeaderColor: 'blue',
};

export default HeroBanner;
