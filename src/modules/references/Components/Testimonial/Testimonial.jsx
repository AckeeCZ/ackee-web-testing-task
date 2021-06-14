import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Profile from './Profile';
import Container from '../Container';

import { headerThemePropType } from '../CaseHeader';

// if content person is not specified render text only (variant 3)
// type is person bottom you render vairant 2
// type is person right you render variant 1
const Testimonial = ({ styles, content, type, background, headerTheme }) => (
    <Container isFluid headerTheme={headerTheme} background={background}>
        <div className={styles.container}>
            <span className={styles.testimonial}>
                <FormattedMessage id={content.quote} />
            </span>
            <Profile content={content.person} type={type} />
        </div>
    </Container>
);

Testimonial.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.shape({
        quote: PropTypes.string.isRequired,
        person: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string,
            }),
            role: PropTypes.string.isRequired,
        }).isRequired,
    }),
    type: PropTypes.string.isRequired,
    ...headerThemePropType,
};

Testimonial.defaultProps = {
    textColor: 'black',
    headerTheme: 'dark',
};

export default Testimonial;
