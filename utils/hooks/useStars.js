import { theme } from 'gatsby-theme-fela';
import { useState, useEffect } from 'react';

function useStars() {
    const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const [colorLines, setColorLines] = useState({
        1: {
            width: 250,
            top: '-20%',
            left: '40%',
            color: theme.colors.fuchsia,
            animationTimeMS: randomNumberBetween(5000, 8000),
        },
        2: {
            width: 200,
            top: '-15%',
            left: '110%',
            color: theme.colors.cyan,
            animationTimeMS: randomNumberBetween(5000, 8000),
        },
        3: {
            width: 300,
            top: '-30%',
            left: '80%',
            color: theme.colors.cyan,
            animationTimeMS: randomNumberBetween(5000, 8000),
        },
    });

    useEffect(() => {
        const updateValues = setInterval(() => {
            Object.keys(colorLines).forEach((item, index) => {
                setColorLines({
                    ...colorLines,
                    [item]: {
                        ...colorLines[index],
                        width: randomNumberBetween(300, 150),
                        top: `${randomNumberBetween(-25, -50)}%`,
                        left: `${randomNumberBetween(0, 120)}%`,
                        animationTimeMS: randomNumberBetween(5000, 8000),
                    },
                });
            });
        }, 5000);

        return function cleanup() {
            clearInterval(updateValues);
        };
        // eslint-disable-next-line
    }, []);

    return { colorLines };
}

export default useStars;
