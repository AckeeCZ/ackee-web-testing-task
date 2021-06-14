//  this cannot be imported from dependencies
import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import { PropTypes } from 'prop-types';
import { useIntl } from 'react-intl';
import Img from '../../../components/Img';

const Image = ({ styles, src, alt }) => {
    const { formatMessage } = useIntl();
    const imageAlt = formatMessage({ id: alt });

    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "references/items" } }) {
                nodes {
                    base
                    relativePath
                    childImageSharp {
                        fluid(quality: 90, cropFocus: SOUTHWEST, maxWidth: 1283, maxHeight: 1283) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    `);

    const match = React.useMemo(
        () => images.allFile.nodes.find(({ relativePath }) => src === relativePath),
        [images, src],
    );

    const {
        childImageSharp: { fluid },
    } = match;

    return (
        <div className={styles.container}>
            <Img style={{ transition: 'transform .4s ease' }} alt={imageAlt} fluid={fluid} />
        </div>
    );
};

Image.propTypes = {
    styles: PropTypes.shape().isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;
