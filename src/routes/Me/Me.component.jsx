import './Me.scss';

import { Spacer } from '../../components/Spacer/Spacer.component';
import { Button } from '../../components/Button/Button.component';
import { IconButton } from '../../components/IconButton/IconButton.component';
import { IdeasList } from './IdeasList/IdeasList.component';
import NothingHere from '../../assets/images/nothing-here.png';

const ideas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

export const Me = () => {
    return (
        <div className='Me page'>
            <Spacer dir='y' size='l' />
            <div className='flex'>
                <Button className='create-idea-button' variant='primary' size='medium' label='Criar ideia' />
                <Spacer dir='x' size='m' />
                <IconButton className='settings-button' variant='tertiary' />
            </div>
            <Spacer dir='y' size='xl' />
            <h1 className='font-headline-mobile-3'>Minhas ideias</h1>
            <Spacer dir='y' size='s' />
            <div className='horizontal-line' />
            <Spacer dir='y' size='m' />
            {
                ideas.length > 0 ?
                <IdeasList data={ideas} />
                :
                <div className='placeholder-container'>
                    <Spacer dir='y' size='xxl' />
                    <img className='nothing-here' src={NothingHere} />
                    <Spacer dir='y' size='m' />
                    <span className='font-body-2 color-n-30 text-align-center'>As ideias que você criar ficarão aqui.</span>
                </div>
            }
            <Spacer dir='y' size='xl' />
        </div>
    );
}