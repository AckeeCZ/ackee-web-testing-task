import React from 'react';
import { PropTypes } from 'prop-types';
import BackgroundImage from './BackgroundImage';

const MainWrapper = ({ styles, children, backgroundImage, headerTheme }) => {
    const backgroundImageProps = typeof backgroundImage === 'string' ? { src: backgroundImage } : backgroundImage;

    return (
        <section data-header-theme={headerTheme} className={styles.container}>
            {backgroundImage && <BackgroundImage {...backgroundImageProps} />}
            {children}
        </section>
    );
};

const Container = ({ styles, children, isFluid, backgroundImage, headerTheme }) => (
    <MainWrapper {...{ styles, children, backgroundImage, headerTheme }}>
        {isFluid ? <div className={styles.fluidContainer}>{children}</div> : children}
    </MainWrapper>
);

Container.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node,
    isFluid: PropTypes.bool,
    headerTheme: PropTypes.string,
};

Container.defaultProps = {
    headerTheme: undefined,
};

export default Container;
