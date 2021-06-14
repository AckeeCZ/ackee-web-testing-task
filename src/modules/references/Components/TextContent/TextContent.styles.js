import { theme } from 'gatsby-theme-fela';

export const container = ({ textColor = theme.colors.black }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '5%',
    paddingRight: '5%',

    tabletLarge: {
        flexDirection: 'row',
    },
    color: textColor,
});

export const mainContent = ({ columns }) => ({
    display: 'block',
    maxWidth: '100%',
    tabletLarge: {
        maxWidth: columns === 2 ? '100%' : '60%',
    },
});

export const title = ({ theme: { fonts } }) => ({
    ...fonts.greycliffExtraBold,
    display: 'block',

    letterSpacing: '-1px',

    fontSize: '2rem',
    marginBottom: '1rem',

    tablet: {
        marginBottom: '2rem',
        fontSize: '3.5rem',
    },
});

export const departmentsContainer = () => ({
    display: 'flex',
    flexWrap: 'wrap',
});

export const outputsContainer = () => ({
    marginLeft: '0',
    marginBottom: '3.5rem',
    marginTop: '1rem',

    tabletLarge: {
        marginTop: 0,
        marginRight: '0',
        marginLeft: 'auto',
    },
});

export const sectionTitle = ({ theme: { fonts } }) => ({
    display: 'block',
    ...fonts.greycliffNormal,
    opacity: 0.5,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3125rem',

    marginBottom: '1rem',
    tablet: {
        marginBottom: '3rem',
    },
});

export const mainText = ({ theme: { fonts }, columns = 1 }) => ({
    ...fonts.greycliffNormal,
    opacity: 0.9,
    columnCount: columns,
    columnFill: 'balance',
    columnGap: '2.5rem',

    fontSize: '1.125rem',
    lineHeight: '1.875rem',

    tablet: {
        fontSize: '1.375rem',
        lineHeight: '2.25rem',
    },

    tabletLarge: {
        columnCount: columns,
    },
});

export const names = ({ theme: { fonts } }) => ({
    display: 'block',
    ...fonts.greycliffNormal,
    fontSize: '1.125rem',
    lineHeight: '1.875rem',
});

export const subSection = ({ theme: { fonts } }) => ({
    display: 'block',
    marginBottom: '1rem',
    ...fonts.greycliffNormal,
    opacity: 0.5,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3125rem',
});

export const outputs = ({ theme: { fonts } }) => ({
    display: 'block',
    ...fonts.greycliffNormal,
    fontSize: '1.125rem',
    lineHeight: '1.875rem',
});

export const categoryLink = ({ theme: { fonts, colors, transition } }) => ({
    display: 'block',
    ...fonts.greycliffNormal,
    color: colors.blue,
    textDecoration: 'underline',
    fontSize: '1.125rem',
    lineHeight: '1.875rem',
    fontWeight: 'bold',

    transition,
    transitionProperty: 'color',

    ':hover': {
        color: colors.fuchsia,
    },
});

export const mainContainer = () => ({
    paddingTop: '3.5rem',
    paddingBottom: '3.5rem',
});

export const subContainer = () => ({
    marginTop: '5rem',
});
