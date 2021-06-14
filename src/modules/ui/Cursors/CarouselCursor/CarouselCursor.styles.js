export const gMain = ({ fill, stroke }) => ({
    fill,
    stroke,
    willChange: 'fill, stroke',
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) fill 0.3s, cubic-bezier(0.4, 0.0, 0.2, 1) stroke 0.3s',
});
