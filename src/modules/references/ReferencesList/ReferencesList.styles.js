export const extendContainer = {
    container: () => ({
        paddingTop: 0,
        paddingBottom: 0,

        tabletLarge: {
            paddingTop: 0,
            paddingBottom: 0,
        },
    }),
};

export const link = ({ theme: { colors } }) => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: colors.blue,
    borderBottom: `0.125rem solid ${colors.blue}`,
    float: 'right',
    textDecoration: 'none',
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) color 0.3s',

    ':hover': {
        color: colors.fuchsia,
    },
});
