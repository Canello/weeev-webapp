import './NothingHerePlaceholder.scss';

import { Spacer } from "../../../components/Spacer/Spacer.component";
import NothingHere from '../../../assets/images/nothing-here.png';

export const NothingHerePlaceholder = () => {
    return (
        <div className='NothingHerePlaceholder'>
            <Spacer dir='y' size='xxl' />
            <img src={NothingHere} />
            <Spacer dir='y' size='m' />
            <span className='font-body-2 color-n-30 text-align-center'>As ideias que você criar ficarão aqui.</span>
        </div>
    );
}