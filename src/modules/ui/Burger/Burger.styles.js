export const container = ({ burgerColors: { border }, theme: { colors, transition } }) => ({
    position: 'relative',
    backgroundColor: colors.transparent,
    border: `1px solid ${border || colors.blue}`,

    paddingTop: 14,
    paddingRight: 19,
    paddingBottom: 13,
    paddingLeft: 19,

    transition,
    transitionProperty: 'border-color',

    cursor: 'pointer',

    ':hover': {
        '> div': {
            opacity: 0,
        },
        '> span': {
            opacity: 1,
        },
    },

    tabletLarge: {
        paddingTop: 20,
        paddingRight: 21,
        paddingBottom: 19,
        paddingLeft: 21,
    },
});

const lineBase = ({ colors, burgerColors, transition }) => ({
    width: 48,
    height: 3,
    backgroundColor: burgerColors?.icon || colors.blue,

    willChange: 'opacity',
    transition,
    transitionProperty: 'opacity, background-color',
    opacity: 1,

    tabletLarge: {
        width: 64,
        height: 3,
    },
});

export const line = ({ theme: { colors, transition }, burgerColors }) => ({
    ...lineBase({ colors, burgerColors, transition }),
});

export const firstLine = ({ theme: { colors, transition }, burgerColors }) => ({
    ...lineBase({ colors, burgerColors, transition }),
    marginBottom: 13,
});

export const more = ({ theme: { colors, fonts }, burgerColors: { text } }) => ({
    color: text || colors.fuchsia,
    fontSize: '1.1875rem',
    ...fonts.greycliffExtraBold,
    textTransform: 'uppercase',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    willChange: 'opacity',
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) opacity 0.3s',
    opacity: 0,
});
