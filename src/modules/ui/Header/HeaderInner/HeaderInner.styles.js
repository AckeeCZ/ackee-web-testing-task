export const container = ({ theme, isSticky }) => ({
    position: 'fixed',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 11,
    height: 48,
    willChange: 'background-color',
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) background-color 0.3s',
    overflowX: 'hidden',

    tabletLarge: {
        height: theme.dimensions.headerHeight,
        pointerEvents: 'none',
    },
});

export const row = () => ({
    display: 'flex',
    flexDirection: 'row',
    pointerEvents: 'all',
});

export const linksWrapper = ({ isSticky }) => ({
    display: 'none',

    tabletLarge: {
        display: 'flex',
        transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) opacity 0.3s',
        willChange: 'opacity',
        opacity: isSticky ? 0 : 1,
        alignItems: 'center',
    },
});

export const bigLinkItem = () => ({
    display: 'inline-block',
    marginRight: '2.5rem',
});

export const bigLink = ({ theme: { colors } }) => ({
    color: colors.blue,
    fontSize: '1.0625rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: `3px solid ${colors.blue}`,
    willChange: 'color',
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) color 0.3s',

    ':hover': {
        color: colors.fuchsia,
    },
});

export const logoContainer = () => ({
    display: 'flex',
});

export const backButton = ({ backButtonColors: { border, background }, theme: { transition } }) => ({
    width: '3rem',
    height: '3rem',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderLeft: `1px solid ${border}`,
    borderRight: `none`,

    borderTop: `1px solid ${border}`,
    borderBottom: `1px solid ${border}`,

    background,

    cursor: 'pointer',

    pointerEvents: 'all',

    transition,
    transitionProperty: 'border-color',

    tabletLarge: {
        width: '3.75rem',
        height: '3.75rem',
    },
});

export const arrow = ({ backButtonColors: { icon }, theme: { transition } }) => ({
    fill: icon,
    transition,
    transitionProperty: 'fill',
});
