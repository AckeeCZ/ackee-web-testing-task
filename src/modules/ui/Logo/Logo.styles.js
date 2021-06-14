export const container = ({ logoColors: { background, border }, theme: { colors, dimensions, transition } }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: background || colors.blue,

    transition,
    transitionProperty: 'background, border-color',

    border: `1px solid ${border || colors.blue}`,

    paddingLeft: '1rem',
    paddingRight: '1rem',

    boxSizing: 'border-box',

    height: '3rem',

    tabletLarge: {
        height: dimensions.headerHeight,
        width: '12rem',
    },

    pointerEvents: 'all',
});

export const logo = ({ logoColors: { text }, theme: { dimensions, colors, transition } }) => ({
    width: 114,
    height: 48,

    fill: text || colors.white,

    transition,
    transitionProperty: 'color',

    tabletLarge: {
        width: '100%',
        height: dimensions.headerHeight,
    },
});
