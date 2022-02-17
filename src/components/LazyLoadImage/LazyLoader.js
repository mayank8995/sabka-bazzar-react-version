import React, { useRef, useEffect } from 'react';

const LazyLoader = ({ src, threshold, alt, width, height }) => {
    const ref = useRef(null);
    const io = useRef(null);

    useEffect(() => {
        if (ref.current) {
            io.current = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0.5) {
                            ref.current.src = src;

                            io.current.unobserve(ref.current);
                        }
                    });
                },
                {
                    threshold
                }
            );

            io.current.observe(ref.current);
        }
        return () => {
            io.current.unobserve(ref.current);
        };
    }, [ref]);

    return <img ref={ref} width={width} height={height} alt={alt} />;

}
export default LazyLoader;