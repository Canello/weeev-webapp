import { useState } from 'react';

import { Spacer } from '../../components/Spacer/Spacer.component';
import { Input } from '../../components/Input/Input.component';
import { Button } from '../../components/Button/Button.component';

export const Settings = () => {
    const [ name, setName ] = useState('');

    return (
        <div className='Settings page'>
            <Spacer dir='y' size='xl' />
            <p className='body-2 color-n-30'>Hm, não tem muito o que configurar...</p>
            <Spacer dir='y' size='m' />
            <Input className='width-100' value={name} setValue={setName} label='Seu nome' />
            <Spacer dir='y' size='m' />
            <div className='flex flex-1'>
                <Button className='flex-1' label='Cancelar' variant='tertiary' size='medium' />
                <Spacer dir='x' size='m' />
                <Button className='flex-1' label='Editar' variant='primary' size='medium' />
            </div>
        </div>
    );
}