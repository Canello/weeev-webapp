import './NobodyHerePlaceholder.styles.scss';

import { Spacer } from '../../../../components/Spacer/Spacer.component';
import NobodyHere from '../../../../assets/images/nobody-here.png';

export const NobodyHerePlaceholder = () => {
    return (
        <div className='NobodyHerePlaceholder'>
            <Spacer dir='y' size='xxl' />
            <img src={NobodyHere} />
            <Spacer dir='y' size='m' />
            <span className='font-body-2 color-n-30 text-align-center'>Compartilhe o link para saber quem quer participar da ideia.</span>
        </div>
    );
}