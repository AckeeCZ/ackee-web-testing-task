export const button = ({ theme: { colors }, isActive }) => ({
    backgroundColor: isActive ? colors.fuchsia : colors.transparent,
    color: isActive ? colors.white : colors.blue,
    borderBottom: isActive ? 'none' : `2px solid ${colors.blue}`,
    fontSize: '0.9rem',
    lineHeight: '1.1rem',
    fontWeight: 500,
    ...(isActive && {
        paddingTop: '0.1875rem',
        paddingBottom: '0.1875rem',
        paddingLeft: '0.375rem',
        paddingRight: '0.375rem',
    }),

    marginRight: '2rem',
    marginBottom: '1rem',
    transition:
        'cubic-bezier(0.4, 0.0, 0.2, 1) color 0.3s, cubic-bezier(0.4, 0.0, 0.2, 1) padding-left 0.3s, cubic-bezier(0.4, 0.0, 0.2, 1) padding-right 0.3s',
    willChange: 'color',
    cursor: 'pointer',

    ':hover': {
        color: isActive ? colors.white : colors.fuchsia,
    },
});
