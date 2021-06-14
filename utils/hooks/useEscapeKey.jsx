import { useEffect } from 'react';

const useEscapeKey = callback => {
    useEffect(() => {
        const handleEsc = event => {
            if (event.keyCode === 27) {
                callback();
            }
        };

        document.addEventListener('keydown', handleEsc, false);

        return () => document.removeEventListener('keydown', handleEsc, false);
    }, [callback]);
};

export default useEscapeKey;
