import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './Navbar.scss';

import { Button } from '../../components/Button/Button.component';
import { UserContext } from '../../contexts/User.context';

import weeevLogo from '../../assets/images/weeev.png';

export const Navbar = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const goToLandingPage = () => navigate('/');
    const goToMe = () => navigate('/me');

    return (
        <>
            <nav className='Navbar glass-10 shadow-5 flex'>
                <div className='wrapper flex'>
                    <div className='weeev-logo-container button-states-10 transition-10' onClick={goToLandingPage}>
                        <img className='weeev-logo' src={weeevLogo} />
                    </div>
                    {user ? <Button label='Minhas ideias' variant='secondary' size='small' onClick={goToMe} /> : null}
                </div>
            </nav>

            {/* Invisible navbar copy to push elements that are below navbar */}
            <div className='ghost-navbar'>
                <div className='wrapper flex'>
                    <div className='weeev-logo-container'>
                        <img className='weeev-logo' src={weeevLogo} />
                    </div>
                    <Button label='Minhas ideias' variant='secondary' size='small' />
                </div>
            </div>

            <Outlet />
        </>
    );
}