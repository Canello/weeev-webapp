import { useEffect, useRef } from 'react';

import './LoadingSpinner.styles.scss';

export const LoadingSpinner = ({ size, borderWidth, ...props }) => {
    const { className, ...propsExceptClassName } = props;
    const additionalClass = className ?? '';
    const ref = useRef();
    size = size ?? '40px';
    borderWidth = borderWidth ?? '5px';

    useEffect(() => {
        if (ref.current) {
            ref.current.style.width = size;
            ref.current.style.height = size;
            ref.current.style.borderWidth = borderWidth;
        }
    }, [ref.current]);

    return (
        <div className={`LoadingSpinner ${additionalClass}`} ref={ref} {...propsExceptClassName} />
    );
}