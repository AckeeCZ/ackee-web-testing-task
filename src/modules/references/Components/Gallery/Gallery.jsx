import React from 'react';
import { PropTypes } from 'prop-types';
import Container from '../Container';
import { GalleryLayout, galleryItemPropType, GALLERY_DIVIDER_WIDTH } from './consts';
import GalleryItem from './GalleryItem';
import Divider from '../Divider';

import { headerThemePropType } from '../CaseHeader';

// TODO: Layout from left
// ONE_THIRD - will result in having 1/3 2/3 layout with images centered in each container
// TWO_THIRDS - will result in having 2/3 1/3 layout with images centered in each container
// EQUAL - willresult in having 3/3 (for one content) or 1/2 1/2 (for two content items) or 1/3 1/3 1/3 for three content items

const Gallery = ({ styles, layout, content, backgroundImage, fullHeight, headerTheme }) => {
    if (layout === GalleryLayout.ONE_THIRD || layout === GalleryLayout.TWO_THIRDS) {
        const leftSize = parseFloat(layout);
        const rightSize = 100 - leftSize;

        return (
            <section data-header-theme={headerTheme} className={styles.containerWrapper}>
                <Container fullHeight {...{ backgroundImage }}>
                    <div className={styles.container}>
                        <GalleryItem fullHeight key={`gallery-0`} size={leftSize} content={content[0]} />
                        <Divider width={GALLERY_DIVIDER_WIDTH} height={GALLERY_DIVIDER_WIDTH} />
                        <GalleryItem fullHeight key={`gallery-1`} size={rightSize} content={content[1]} />
                    </div>
                </Container>
            </section>
        );
    }

    const size = 100 / content.length;

    return (
        <section data-header-theme={headerTheme} className={styles.containerWrapper}>
            <Container fullHeight {...{ backgroundImage }}>
                <div className={styles.container}>
                    {content.map((item, i) => (
                        <React.Fragment key={`gallery-${i}`}>
                            <GalleryItem fullHeight size={size} content={item} dividers={content.length - 1} />
                            {content.length - i >= 2 && (
                                <Divider height={GALLERY_DIVIDER_WIDTH} width={GALLERY_DIVIDER_WIDTH} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </section>
    );
};

Gallery.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf(galleryItemPropType).isRequired,
    layout: PropTypes.oneOf(Object.values(GalleryLayout)).isRequired,
    backgroundImage: PropTypes.shape(),
    fullHeight: PropTypes.bool,
    ...headerThemePropType,
};

Gallery.defaultProps = {
    headerTheme: 'light',
};

export default Gallery;
