export const container = ({ isMenuVisible }) => ({
    opacity: !isMenuVisible ? '0' : '1',
    transform: `translateY(${!isMenuVisible ? '2rem' : 0})`,
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) transform 0.4s, cubic-bezier(0.4, 0.0, 0.2, 1) opacity 0.4s',
    transitionDelay: '0.5s',

    paddingTop: '2rem',

    tabletLarge: {
        paddingTop: '3rem',
        // marginTop: '6rem',
    },
});

export const list = {
    display: 'block',
    padding: 0,
    marginBottom: '4.25rem',
};

export const listMoreLinks = () => ({
    ...list,
    display: 'flex',
    flexDirection: 'row',

    tablet: {
        display: 'block',
    },
});

export const moreLinksInner = () => ({
    display: 'grid',

    tablet: {
        display: 'block',
    },
});

export const columnBase = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '3rem',
};

export const column = () => ({
    ...columnBase,
    ':last-child': {
        marginRight: 0,
    },
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

const linkBase = ({ colors, fonts }) => ({
    ...fonts.greycliffBold,
    color: colors.cyan,
    display: 'inline-block',
    textDecoration: 'none',
    borderBottom: `2px solid ${colors.blue}`,
    transition: 'ease-out 0.3s border, ease-out 0.3s color',
    willChange: 'color, border',
});

export const bigLink = ({ theme }) => ({
    ...linkBase(theme),
    fontSize: '2rem',
    lineHeight: '2.2rem',
    letterSpacing: '-0.45px',
    marginBottom: '1.875rem',

    ':hover': {
        color: theme.colors.fuchsia,
        borderBottom: `2px solid ${theme.colors.transparent}`,
    },

    tablet: {
        fontSize: '2.375rem',
        lineHeight: '2.625rem',
        paddingBottom: 3,
        marginBottom: '2.375rem',
    },
});

export const link = ({ theme }) => ({
    ...linkBase(theme),
    fontSize: '1.25rem',
    marginBottom: '1.625rem',

    ':hover': {
        color: theme.colors.fuchsia,
        borderBottom: `2px solid ${theme.colors.transparent}`,
    },
});

export const activeLink = ({ theme }) => ({
    color: theme.colors.fuchsia,
    borderBottom: `2px solid ${theme.colors.transparent}`,
});

export const bigLinkItem = () => ({
    display: 'block',
    marginRight: '2rem',

    tablet: {
        display: 'inline-block',
        marginRight: '3rem',
    },
});

export const linkItem = () => ({
    display: 'inline-block',
    marginRight: '1.5rem',

    tablet: {
        marginRight: '2.25rem',
    },
});
