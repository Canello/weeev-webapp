import './StepByStep.scss';

import { Spacer } from '../../../components/Spacer/Spacer.component';

import AltLightbulbWhite from '../../../assets/icons/alt-lightbulb-white.svg';
import AltWhatsappWhite from '../../../assets/icons/alt-whatsapp-white.svg';
import AltSuccessWhite from '../../../assets/icons/alt-success-white.svg';
import AltArrowPrimary30 from '../../../assets/icons/alt-arrow-primary-30.svg';

export const StepByStep = () => {
    return (
        <div className='StepByStep'>
            <div className='step'>
                <div className='icon-container'>
                    <img src={AltLightbulbWhite} />
                </div>
                <Spacer dir='x' size='m'/>
                <h2 className='font-body-2 color-n-40'>Crie uma ideia e compartilhe o link</h2>
            </div>
            <img className='margin-left' src={AltArrowPrimary30} />
            <div className='step'>
                <div className='icon-container'>
                    <img src={AltWhatsappWhite} />
                </div>
                <Spacer dir='x' size='m'/>
                <h2 className='font-body-2 color-n-40'>Quem gostar da ideia passa o WhatsApp</h2>
            </div>
            <img className='margin-left' src={AltArrowPrimary30} />
            <div className='step'>
                <div className='icon-container'>
                    <img src={AltSuccessWhite} />
                </div>
                <Spacer dir='x' size='m'/>
                <h2 className='font-body-2 color-n-40'>Escolha quem você quiser para criar um grupo e agitar o rolê</h2>
            </div>
        </div>
    );
}