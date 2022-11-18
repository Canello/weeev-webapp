import './Input.styles.scss';

export const Input = ({ className='', containerClassName='', setValue, label, helperText, error=false, ...otherProps }) => {
    if (!otherProps.value === undefined) console.log('Missing "value" on Input');
    const isEmpty = otherProps.value.length === 0;
    const labelFont = isEmpty ? 'no-background' : 'label-filled';
    const boxError = error ? 'box-error' : '';
    const labelError = error ? 'label-error' : '';
    const onChange = otherProps.onChange ?? ((event) => setValue(event.target.value));
    
    return (
        <div className={`Input ${containerClassName}`}>
            <input className={`box ${className} ${boxError}`} onChange={onChange} {...otherProps} />
            {
                label ?
                <span className={`label ${labelFont} ${labelError}`}>{label}</span>
                : null
            }
            {
                helperText ?
                <span className={'font-caption-1 color-n-30'}>{helperText}</span>
                :null
            }
        </div>
    );
}