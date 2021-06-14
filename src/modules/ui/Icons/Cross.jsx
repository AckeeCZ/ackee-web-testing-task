import React from 'react';

const Cross = props => (
    <svg viewBox="0 0 64 21" {...props}>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(0.000000, 0.000000)">
                <rect
                    transform="translate(32.000000, 10.500000) rotate(-345.000000) translate(-32.000000, -10.500000) "
                    x="0"
                    y="9"
                    width="64"
                    height="3"
                />
                <rect
                    transform="translate(32.000000, 10.500000) rotate(-15.000000) translate(-32.000000, -10.500000) "
                    x="0"
                    y="9"
                    width="64"
                    height="3"
                />
            </g>
        </g>
    </svg>
);

export default Cross;
