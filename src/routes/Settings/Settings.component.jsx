import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Spacer } from '../../components/Spacer/Spacer.component';
import { Input } from '../../components/Input/Input.component';
import { Button } from '../../components/Button/Button.component';
import { UserContext } from '../../contexts/User.context';
import { useFetch } from '../../hooks/useFetch.hook';
import { UserTokenContext } from '../../contexts/UserToken.context';
import { editUser } from '../../services/users.services';

export const Settings = () => {
    const { user, updateUser } = useContext(UserContext);
    const { userToken } = useContext(UserTokenContext);
    const [ fullName, setFullName ] = useState(user.full_name);
    const navigate = useNavigate();
    const goToMe = () => navigate('/me');
    const [ requestEditUser, editedUser, isFetchingEditedUser ] = useFetch();

    const onSubmit = () => {
        requestEditUser(editUser(userToken, fullName), null, (res) => {
            updateUser();
            goToMe();
        });
    }

    return (
        <div className='Settings page'>
            <Spacer dir='y' size='xl' />
            <p className='body-2 color-n-30'>Hm, não tem muito o que configurar...</p>
            <Spacer dir='y' size='m' />
            <Input className='width-100' value={fullName} setValue={setFullName} label='Seu nome' />
            <Spacer dir='y' size='m' />
            <div className='flex flex-1'>
                <Button className='flex-1' label='Cancelar' variant='tertiary' size='medium' onClick={goToMe} />
                <Spacer dir='x' size='m' />
                <Button className='flex-1' label='Editar' variant='primary' size='medium' onClick={onSubmit} />
            </div>
        </div>
    );
}