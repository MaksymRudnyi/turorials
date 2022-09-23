import { useEffect, useRef } from 'react';

export const ViewPort = ({ children }) => {
    const outer = useRef(null);
    const inner = useRef(null);

    useEffect(() => {
        const resize = () => {
            requestAnimationFrame(() => {
                if (document.body.offsetWidth >= 1280) {
                    const scale = Math.min(1, document.body.offsetWidth / 1440);

                    inner.current.style.transform = `scale(${scale})`;
                    inner.current.style.minHeight = `calc(100vh / ${scale})`;

                    const fixHeight = document.body.offsetHeight / 967 > scale;

                    outer.current.style.maxHeight = fixHeight ? `100vh` : 'none';
                } else {
                    inner.current.style.transform = 'none';
                    inner.current.style.minHeight = '100vh';
                }
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div ref={outer}>
            <div ref={inner}>
                {children}
            </div>
        </div>
    );
};
