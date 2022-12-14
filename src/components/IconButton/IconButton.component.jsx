import './IconButton.styles.scss';

const CONTAINER = {
    'primary': 'gradient-p-10',
    'secondary': 'secondary',
    'tertiary': 'tertiary',
    'primary-solo': '',
    'secondary-solo': ''
}

export const IconButton = ({ variant='primary', icon, iconClass, ...otherProps }) => {
    const {className, ...otherPropsExceptClassName} = otherProps;

    return (
        <div className={`IconButton border-m button-states-10 transition-10 ${CONTAINER[variant]} ${className}`} {...otherPropsExceptClassName}>
            <img className={iconClass} src={icon} />
        </div>
    );
}