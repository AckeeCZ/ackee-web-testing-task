import { TestimonialType } from '../consts';

export const container = ({ type }) => ({
    display: 'flex',
    flexDirection: type === TestimonialType.PROFILE_RIGHT ? 'column' : 'row',
    marginTop: '5rem',
    tablet: {
        marginRight: 'auto',
        marginLeft: type === TestimonialType.PROFILE_BOTTOM ? 0 : 'auto',
        marginTop: type === TestimonialType.PROFILE_RIGHT ? '0' : '5rem',
    },
});

export const nameContainer = ({ type }) => {
    let properties;
    if (type === TestimonialType.PROFILE_RIGHT) {
        properties = { justifyContent: 'center', paddingTop: '1rem' };
    } else {
        properties = { marginLeft: '1rem' };
    }

    return {
        display: 'flex',
        flexDirection: 'column',
        ...properties,
    };
};

export const nameText = ({ theme: { fonts }, type }) => ({
    ...fonts.greycliffBold,
    lineHeight: '1.875rem',
    fontSize: '1.125rem',
    margin: type === TestimonialType.PROFILE_RIGHT ? 'auto' : '0',
});

export const positionText = ({ theme: { fonts }, type }) => ({
    ...fonts.greycliffNormal,
    lineHeight: '1.875rem',
    fontSize: '1.125rem',
    textAlign: 'center',
    margin: type === TestimonialType.PROFILE_RIGHT ? 'auto' : '0',
});

export const image = ({ type }) => ({
    width: type === TestimonialType.PROFILE_RIGHT ? '6.25rem' : '5rem',
    height: type === TestimonialType.PROFILE_RIGHT ? '6.25rem' : '5rem',
    margin: type === TestimonialType.PROFILE_RIGHT ? 'auto' : '0',
});
