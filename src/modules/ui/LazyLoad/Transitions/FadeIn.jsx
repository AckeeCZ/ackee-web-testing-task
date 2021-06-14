import React from 'react';
import { PropTypes } from 'prop-types';
import { createComponentWithProxy } from 'react-fela';
import Transition from 'react-transition-group/Transition';

const getOpacity = transitionState => {
    switch (transitionState) {
        case 'entered':
            return 1;
        case 'entering':
            return 0;
        case 'exiting':
            return 0;
        case 'exited':
            return 0;
        default:
            return 0;
    }
};

const FADE_THEME = ({ transitionState, timeout }) => ({
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: getOpacity(transitionState),
});

const FadeContainer = ({ children, className }) => <div className={className}>{children}</div>;

const FelaFade = createComponentWithProxy(FADE_THEME, FadeContainer);

export const FadeTransition = ({ children, timeout, ...props }) => (
    <Transition timeout={timeout} {...props}>
        {transitionState => (
            <FelaFade transitionState={transitionState} timeout={timeout}>
                {children}
            </FelaFade>
        )}
    </Transition>
);

FadeContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

FadeTransition.propTypes = {
    children: PropTypes.element.isRequired,
    timeout: PropTypes.number,
};

FadeTransition.defaultProps = {
    timeout: 0,
};

export default FadeTransition;
