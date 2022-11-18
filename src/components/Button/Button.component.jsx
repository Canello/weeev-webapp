import './Button.styles.scss';

const FONT_COLOR = {
    primary: 'color-n-white',
    secondary: 'color-i-5',
    tertiary: 'color-n-40'
}

const FONT_FORMAT = {
    small: 'font-button-2',
    medium: 'font-button-1',
    large: 'font-button-1'
}

export const Button = ({ className='', label, variant='primary', size='medium', children, ...otherProps }) => {
    return (
        <button className={`Button border-m button-states-10 transition-10 ${variant} ${size} ${className}`} {...otherProps}>
            <span className={`${FONT_COLOR[variant]} ${FONT_FORMAT[size]}`}>{label}</span>
            {children}
        </button>
    );
}