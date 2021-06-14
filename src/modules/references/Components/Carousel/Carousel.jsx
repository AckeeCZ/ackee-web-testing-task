import loadable from '@loadable/component';

import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../../ui';
import { FormattedMessage } from 'react-intl';

import ArrowButton, { ArrowButtonType } from './ArrowButton';

import Slide from './Slide';

import { DeviceType } from './consts';

import { headerThemePropType } from '../CaseHeader';

const SlickCarousel = loadable(() => import('react-slick'));

const { LazyLoadContainer } = UI;

const Carousel = ({ styles, slides, background, backgroundImage, deviceType, textColor, description, headerTheme }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        easing: 'easeInOut',
        slidesToShow: deviceType === DeviceType.DESKTOP ? 1.25 : 3.75,
        slidesToScroll: 1,
        nextArrow: <ArrowButton type={ArrowButtonType.RIGHT} />,
        prevArrow: <ArrowButton type={ArrowButtonType.LEFT} />,

        responsive: [
            {
                // this actually means less than 1024 🙉
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.25,
                },
            },
            {
                // this actually means less than 1200 🙉
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                },
            },
        ],
    };

    return (
        <section data-header-theme={headerTheme}>
            <LazyLoadContainer lazyLoaded>
                <div className={styles.container}>
                    <SlickCarousel className={styles.carousel} {...settings}>
                        {slides.map((slide, index) => (
                            <Slide deviceType={deviceType} textColor={textColor} key={index} content={slide} />
                        ))}
                    </SlickCarousel>
                    {description && (
                        <p className={styles.description}>
                            <FormattedMessage id={description} />
                        </p>
                    )}
                </div>
            </LazyLoadContainer>
        </section>
    );
};

Carousel.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    textColor: PropTypes.oneOf(['#000', '#fff']),
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
            description: PropTypes.string,
        }),
    ).isRequired,
    deviceType: PropTypes.oneOf(Object.values(DeviceType)).isRequired,
    background: PropTypes.string,
    backgroundImage: PropTypes.string,
    description: PropTypes.string,
    ...headerThemePropType,
};

Carousel.defaultProps = {
    textColor: '#fff',
    description: undefined,
    background: undefined,
    backgroundImage: undefined,
    headerTheme: 'light',
};

export default Carousel;
