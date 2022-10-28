import { useState } from 'react';

import { Button } from '../../../components/Button/Button.component';
import { Input } from '../../../components/Input/Input.component';
import { Spacer } from '../../../components/Spacer/Spacer.component';

export const IdeaForms = () => {
    const [ name, setName ] = useState('');
    const [ instagram, setInstagram ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');

    return (
        <div className='IdeaForms page'>
            <Spacer dir='y' size='xl' />
            <h1 className='font-headline-mobile-4 color-n-20 text-align-center'>Daltrini quer jogar queimada</h1>
            <Spacer dir='y' size='xs' />
            <p className='font-body-2 color-n-30'>Apenas Daltrini pode ver sua resposta.<br/>Se ele(a) decidir agitar o rolê, poderá criar um grupo e te adicionar.</p>
            <Spacer dir='y' size='xl' />
            <Input value={name} setValue={setName} label='Meu nome' />
            <Spacer dir='y' size='m' />
            <Input value={instagram} setValue={setInstagram} label='@meu_instagram' />
            <Spacer dir='y' size='m' />
            <Input value={phoneNumber} setValue={setPhoneNumber} label='Meu número (WhatsApp)' />
            <Spacer dir='y' size='m' />
            <Button label='Também quero' variant='primary' size='large' />
            <Spacer dir='y' size='m' />
            <span className='note font-caption-2 color-n-30 text-align-center'>Ninguém mais terá acesso aos seus dados.</span>
        </div>
    );
}