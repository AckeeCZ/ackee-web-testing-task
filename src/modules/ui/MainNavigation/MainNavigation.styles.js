import bg from '../../../../static/images/loader/background.png';

export const container = ({ isMenuVisible, theme: { colors } }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll !important', // mobile scrolling
    backgroundImage: `url(${bg})`,
    backgroundColor: colors.starsNavigationBg,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 12,
    visibility: isMenuVisible ? 'visible' : 'hidden',
    opacity: isMenuVisible ? 1 : 0,
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) opacity 0.3s, cubic-bezier(0.4, 0.0, 0.2, 1) visibility 0.3s',
    justifyContent: 'center',
    alignItems: 'flex-start',

    '@media(min-height: 900px)': {
        alignItems: 'center',
    },
});

export const fluidContainer = () => ({
    tabletLarge: {
        padding: 0,
        paddingTop: '3rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(5.9%, 1fr))',
    },
});

export const closeButton = () => ({
    position: 'absolute',
    top: '1rem',
    right: '1.25rem',
    width: '3.3rem',
    height: '1.3125rem',
    zIndex: 2,
    cursor: 'pointer',

    tabletLarge: {
        right: '1.3625rem',
        top: '1.2625rem',
        width: '4rem',
        height: '1.3125rem',
    },
});

export const closeButtonIcon = ({ theme: { colors } }) => ({
    fill: colors.cyan,
});

export const logoContainer = () => ({
    display: 'none',
    alignItems: 'center',

    tabletLarge: {
        display: 'flex',
        position: 'relative',
        maxHeight: '60%',
    },

    desktopLarge: {
        maxHeight: 'unset',
    },
});

export const logo = () => ({
    width: '80%',
});

export const list = () => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginBottom: '4.25rem',
});

export const sectionTitle = ({ theme: { colors, fonts } }) => ({
    ...fonts.greycliffBold,
    color: colors.white,
    fontSize: '0.875rem',
    lineHeight: '1.0625rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: 28,
});

export const columnBase = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '3rem',
};

export const marginedBlock = () => ({
    marginRight: '2rem',

    desktopLarge: {
        marginRight: '5rem',
    },
});

export const langsContainer = () => ({
    display: 'flex',
    position: 'absolute',
    top: '2.1875rem',
    left: '1.5rem',

    tabletLarge: {
        top: '1.2625rem',
        left: '1.3625rem',
    },
});

export const navigationContainer = () => ({
    overflow: 'visible',
    paddingBottom: '3rem',

    tabletLarge: {
        overflow: 'hidden',
        paddingBottom: 0,
    },
});
