import { useNavigate } from 'react-router-dom';

import './Me.scss';

import { Spacer } from '../../components/Spacer/Spacer.component';
import { Button } from '../../components/Button/Button.component';
import { IconButton } from '../../components/IconButton/IconButton.component';
import { IdeasList } from './IdeasList/IdeasList.component';
import { NothingHerePlaceholder } from './NothingHerePlaceholder/NothingHerePlaceholder.component';

import SettingNeutral50 from '../../assets/icons/setting-neutral-50.svg';

const ideas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

export const Me = () => {
    const navigate = useNavigate();
    const goToSettings = () => navigate('/settings');
    const goToCreateIdea = () => navigate('/create-idea');

    return (
        <div className='Me page'>
            <Spacer dir='y' size='l' />
            <div className='flex'>
                <Button className='create-idea-button' variant='primary' size='medium' label='Criar ideia' onClick={goToCreateIdea} />
                <Spacer dir='x' size='m' />
                <IconButton className='settings-button' variant='tertiary' icon={SettingNeutral50} onClick={goToSettings} />
            </div>
            <Spacer dir='y' size='xl' />
            <h1 className='font-headline-mobile-3'>Minhas ideias</h1>
            <Spacer dir='y' size='s' />
            <div className='horizontal-line' />
            <Spacer dir='y' size='m' />
            {ideas.length > 0 ? <IdeasList data={ideas} /> : <NothingHerePlaceholder />}
            <Spacer dir='y' size='xl' />
        </div>
    );
}