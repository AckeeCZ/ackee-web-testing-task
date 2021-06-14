import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { galleryItemPropType } from '../consts';
import Image from '../../Image';

const GalleryItem = ({ styles, content }) => {
    if (content.video) {
        return (
            <video
                autoPlay
                muted
                loop
                width={content.video.width}
                height={content.video.height}
                className={styles.videoContainer}
                style={content.video.style}
                preload="metadata"
                playsInline
            >
                <source src={content.video.src} type="video/mp4" />
            </video>
        );
    }

    if (!content.text) {
        return (
            <div className={styles.imageContainer}>
                <Image
                    style={content.image.style}
                    alt={content.image.alt}
                    imgStyle={content.image.imgStyle}
                    src={content.image.src}
                />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    style={content.image.style}
                    alt={content.image.alt}
                    imgStyle={content.image.imgStyle}
                    src={content.image.src}
                />
            </div>
            <span className={styles.text}>
                <FormattedMessage id={content.text} />
            </span>
        </div>
    );
};

GalleryItem.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    content: galleryItemPropType,
};

export default GalleryItem;
