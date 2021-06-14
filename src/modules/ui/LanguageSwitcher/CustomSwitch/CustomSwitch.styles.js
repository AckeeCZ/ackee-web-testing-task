export const menuItem = ({ theme, isCurrent, inNavigation }) => {
    let color;
    if (inNavigation) {
        color = isCurrent ? theme.colors.fuchsia : theme.colors.cyan;
    } else {
        color = isCurrent ? theme.colors.fuchsia : theme.colors.blue;
    }

    return {
        ...theme.fonts.greycliffBold,
        display: 'inline-block',
        marginRight: '2rem',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        color,
        borderBottom: inNavigation && !isCurrent && `2px solid ${theme.colors.blue}`,

        transition: 'ease-out 0.3s border, ease-out 0.3s color',
        willChange: 'color, border',

        ':hover': {
            color: theme.colors.fuchsia,
            borderBottom: inNavigation && `2px solid ${theme.colors.transparent}`,
        },
    };
};

export const menuItemLink = () => ({
    textDecoration: 'none',
});
