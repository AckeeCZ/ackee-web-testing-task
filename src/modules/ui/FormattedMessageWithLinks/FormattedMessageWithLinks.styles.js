export const link = ({ theme: { colors } }) => ({
    color: colors.blue,
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) color 0.3s',

    ':hover': {
        color: colors.fuchsia,
    },

    ':visited': {
        color: colors.blue,
    },
});
