import './Button.scss';

const FONT_COLOR = {
    primary: 'color-n-white',
    secondary: 'color-i-5',
    tertiary: 'color-n-40'
}

const FONT_FORMAT = {
    small: 'f-button-2',
    medium: 'f-button-1',
    large: 'f-button-1'
}

export const Button = ({ label, variant='primary', size='medium', children, ...otherProps }) => {
    return (
        <button className={`Button ${variant} ${size} border-m`} {...otherProps}>
            <span className={`${FONT_COLOR[variant]} ${FONT_FORMAT[size]}`}>{label}</span>
            {children}
        </button>
    );
}