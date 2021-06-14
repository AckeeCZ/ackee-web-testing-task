import React from 'react';
import { PropTypes } from 'prop-types';
import { useIntl } from 'react-intl';

function replaceRange(chars, start, end, substitute) {
    const replacedText = chars.slice(start, end).join('');

    chars.splice(start, end - start, substitute);

    return replacedText;
}

function parseLinks(string) {
    const links = string.match(/<a.*?\/a>/g).map(a => {
        const from = string.indexOf(a);
        const to = from + a.length;

        const text = a.match(/<a [^>]+>([^<]+)<\/a>/)?.[1];

        const url = a.match(/href=("|')(.*?)("|')/)?.[2];

        return { from, to, text, url };
    });

    const LINK_SUBSTITUTE = '{{link}}';
    const chars = [...string];

    const linkTexts = Array.from(links)
        .reverse()
        .map(link => {
            return replaceRange(chars, link.from, link.to, LINK_SUBSTITUTE);
        });

    const chunks = chars.join('').split(LINK_SUBSTITUTE);

    return {
        chunks,
        linkTexts: linkTexts.reverse(),
        links,
    };
}

const FormattedMessageWithLinks = ({ styles, id }) => {
    const { formatMessage } = useIntl();

    const string = formatMessage({ id });

    if (!string.match(/<a.*?\/a>/g)) {
        return string;
    }

    const { chunks, links } = parseLinks(string);

    return (
        <>
            {chunks?.map((chunk, index) => {
                return (
                    <React.Fragment key={index}>
                        {chunk}
                        <a className={styles.link} href={links[index]?.url}>
                            {links[index]?.text}
                        </a>
                    </React.Fragment>
                );
            })}
        </>
    );
};

FormattedMessageWithLinks.propTypes = {
    styles: PropTypes.shape().isRequired,
    id: PropTypes.string.isRequired,
};

export default FormattedMessageWithLinks;
