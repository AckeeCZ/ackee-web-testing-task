import React from 'react';
import PropTypes from 'prop-types';

import LazyLoad from 'react-lazyload';

import { FadeInTransition } from './Transitions';
import Loader from '../Loader';

export const extendContainer = {
    container: () => ({
        minHeight: 500,
    }),
};

const LazyLoadWrapper = ({
    children,
    offset,
    height,
    placeholderComponent,
    animTimeout,
    lazyLoaded,
    noAnim,
    unmountIfInvisible,
}) => {
    if (lazyLoaded) {
        return (
            <LazyLoad
                offset={offset}
                height={height}
                unmountIfInvisible={unmountIfInvisible}
                placeholder={
                    placeholderComponent || (
                        <div style={{ minHeight: height, position: 'relative' }}>
                            <Loader />
                        </div>
                    )
                }
            >
                {noAnim ? (
                    children
                ) : (
                    <FadeInTransition in timeout={animTimeout} appear>
                        {children}
                    </FadeInTransition>
                )}
            </LazyLoad>
        );
    }

    return <>{children}</>;
};

LazyLoadWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number,
    height: PropTypes.number,
    animTimeout: PropTypes.number,
    lazyLoaded: PropTypes.bool,
    placeholderComponent: PropTypes.node,
    noAnim: PropTypes.bool,
    unmountIfInvisible: PropTypes.bool,
};

LazyLoadWrapper.defaultProps = {
    offset: 300,
    height: 800,
    animTimeout: 400,
    lazyLoaded: true,
    placeholderComponent: undefined,
    noAnim: false,
    unmountIfInvisible: false,
};

export default LazyLoadWrapper;
