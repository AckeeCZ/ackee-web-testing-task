import { PropTypes } from 'prop-types';

export const GalleryLayout = {
    THREE_QUARTERS: '75',
    ONE_THIRD: '33.333',
    TWO_THIRDS: '66.666',
    ONE_HALF: '50',
    EQUAL: '100.0',
};

export const GALLERY_DIVIDER_WIDTH = 20;

export const galleryItemPropType = PropTypes.shape({
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundVideo: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.shape({
        style: PropTypes.shape({}),
        src: PropTypes.string,
        alt: PropTypes.string,
        imgStyle: PropTypes.shape({}),
    }),
    video: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }),
});
