import loaderSprite from '../../../../static/images/loader/preloader.png';

export const loader = () => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const loaderElement = ({ animationName }) => ({
    width: 100,
    height: 20,

    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: `auto`,
    marginRight: `auto`,

    opacity: 1,
    background: `url(${loaderSprite}) left center`,
    animation: `${animationName} 0.9s steps(23) infinite`,
});
