import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TestimonialType } from '../consts';
import Image from '../../Image';

const Profile = ({ styles, type, content }) => (
    <>
        {type !== TestimonialType.PROFILE_NONE && (
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={content.image.src} />
                </div>
                <div className={styles.nameContainer}>
                    <span className={styles.nameText}>
                        <FormattedMessage id={content.name} />
                    </span>
                    <span className={styles.positionText}>
                        <FormattedMessage id={content.role} />
                    </span>
                </div>
            </div>
        )}
    </>
);

Profile.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string,
    content: PropTypes.shape(),
};

Profile.defaultProps = {
    type: TestimonialType.PROFILE_RIGHT,
};

export default Profile;
