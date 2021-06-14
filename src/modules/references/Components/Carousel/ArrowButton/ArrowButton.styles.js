import { combineRules } from 'fela';

export const navigationButton = ({ theme: { colors, transition } }) => ({
    width: '1.75rem',
    height: '3.9375rem',
    verticalAlign: 'unset',
    pointerEvents: 'auto',

    display: 'none',

    position: 'absolute',
    right: '5rem',
    top: '50%',
    zIndex: 2,

    transform: 'translateY(-50%)',

    cursor: 'pointer',

    ':hover': {
        '> svg > g > g': {
            stroke: colors.fuchsia,
        },
    },

    '&:before': {
        display: 'none',
    },

    transition,
    transitionProperty: 'opacity',

    '&.slick-disabled': {
        opacity: 0,
        visibility: 'hidden',
    },

    tablet: {
        width: '2.4rem',
        display: 'block',
    },
});

export const navigationButtonLeft = combineRules(navigationButton, () => ({
    transform: 'rotate(180deg) translateY(50%)',

    left: '-5rem',
    right: 'initial',
}));
