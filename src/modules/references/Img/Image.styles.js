export const container = ({ theme: { colors } }) => ({
    background: colors.fuchsia,

    '& img': {
        transition: 'transform .4s ease, opacity 500ms ease 0s!important',
        backfaceVisibility: 'hidden',
        '-webkit-backface-visibility': 'hidden',
    },
});
