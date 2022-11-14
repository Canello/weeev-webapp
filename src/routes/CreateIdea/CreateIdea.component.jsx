import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Spacer } from '../../components/Spacer/Spacer.component';
import { Input } from '../../components/Input/Input.component';
import { Button } from '../../components/Button/Button.component';
import { useFetch } from '../../hooks/useFetch.hook';
import { UserTokenContext } from '../../contexts/UserToken.context';
import { createIdea } from '../../services/ideas.services';
import { MyIdeasContext } from '../../contexts/MyIdeas.context';

export const CreateIdea = () => {
    const { userToken } = useContext(UserTokenContext);
    const { updateMyIdeas } = useContext(MyIdeasContext);
    const navigate = useNavigate();
    const goToIdea = (ideaId) => navigate('/idea/' + ideaId);
    
    const [ title, setTitle ] = useState('');
    const [ requestCreateIdea, idea, isFetchingIdea, createIdeaError ] = useFetch();

    const onSubmit = () => {
        requestCreateIdea(createIdea(userToken, title), null, (res) => {
            updateMyIdeas();
            goToIdea(res.id);
        });
    }

    return (
        <div className='CreateIdea page'>
            <Spacer dir='y' size='xl' />
            <p className='font-body-2 color-n-30'>É só completar a frase e criar a ideia.<br/>Aí você pode compartilhar o link pra saber quem também tá afim.</p>
            <Spacer dir='y' size='m' />
            <h1 className='font-headline-mobile-4 color-n-20'>Eu quero...</h1>
            <Spacer dir='y' size='xs' />
            <Input value={title} setValue={setTitle} placeholder='...fazer alguma coisa' />
            <Spacer dir='y' size='m' />
            <Button className='width-100' label='Criar ideia' variant='primary' size='large' onClick={onSubmit} />
        </div>
    );
}