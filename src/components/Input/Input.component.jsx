import './Input.scss';

export const Input = ({ className, containerClassName, label, helperText, error=false, ...otherProps }) => {
    if (!otherProps.value === undefined) console.log('Missing "value" on Input');
    const isEmpty = otherProps.value.length === 0;
    const labelFont = isEmpty ? 'no-background' : 'label-filled';
    const boxError = error ? 'box-error' : '';
    const labelError = error ? 'label-error' : '';
    
    return (
        <div className={`Input ${containerClassName}`}>
            <input className={`box ${className} ${boxError}`} {...otherProps} />
            {
                label ?
                <span className={`label ${labelFont} ${labelError}`}>{label}</span>
                : null
            }
            {
                helperText ?
                <span className={'font-footer-1 color-n-50'}>{helperText}</span>
                :null
            }
        </div>
    );
}