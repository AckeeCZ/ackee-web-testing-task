export const container = () => ({
    paddingLeft: '5%',
    paddingRight: '5%',
});

export const title = ({ theme: { fonts }, textColor }) => ({
    marginBottom: '6.25rem',
    color: textColor,
    ...fonts.greycliffBold,
    fontSize: '4rem',
});

export const departmentsContainer = () => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',

    tablet: {
        flexDirection: 'row',
    },
});

export const teamContainer = () => ({
    width: '100%',
    marginBottom: '3.5rem',

    tablet: {
        width: '50%',
    },

    tabletLarge: {
        width: '25%',
    },
});

export const department = ({ theme: { fonts }, textColor }) => ({
    display: 'block',
    marginBottom: '0.5rem',
    ...fonts.greycliffNormal,
    color: textColor,
    opacity: 0.5,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3125rem',
});

export const names = ({ theme: { fonts }, textColor }) => ({
    display: 'block',
    ...fonts.greycliffNormal,
    color: textColor,
    fontSize: '1.125rem',
    lineHeight: '1.875rem',
    paddingBottom: '0.25rem',
});
