export const line = ({ theme: { colors }, color, width, rotation, top, right, bottom, left }) => ({
    position: 'absolute',
    top,
    right,
    bottom,
    left,
    background: color || colors.fuchsia,
    width: width || 200,
    height: 1,
    transform: `rotate(${rotation || -45}deg)`,
});

export const floatingLine = ({ animationName, animationTimeMS }) => ({
    animation: `${animationTimeMS}ms ${animationName} 1 linear`,
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
});
