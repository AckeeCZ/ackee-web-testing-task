export const extendContainer = {
    container: () => ({
        position: 'relative',
        marginBottom: '5rem',
        transition: 'opacity .4s ease, margin .4s ease',

        '&:hover': {
            '& img': {
                transform: 'scale(1.05)',
                opacity: '0.9!important',
            },
        },

        tabletLarge: {
            width: '100%',
        },
    }),
};

export const extendTitle = {
    title: () => ({
        marginTop: '1.25rem',
        marginBottom: 2,
        fontSize: '2rem',
        lineHeight: '2.5rem',
        letterSpacing: '-0.89px',
    }),
};

export const extendText = {
    text: () => ({
        fontSize: '1.2rem',
        lineHeight: '1.7rem',
        letterSpacing: '-0.5px',
    }),
};

export const extendCategoryTitle = {
    title: ({ theme: { colors } }) => ({
        position: 'absolute',
        top: 25,
        left: 29,
        margin: 0,
        backgroundColor: colors.cyan,
        fontWeight: 500,
        padding: '0.25rem 0.375rem 0.25rem 0.3125rem',
        fontSize: '0.95rem',
        lineHeight: '1rem',
        letterSpacing: '-0.89px',
    }),
};

export const link = () => ({
    textDecoration: 'none',
});
