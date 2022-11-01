import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navbar.scss';
import weeevLogo from '../../assets/images/weeev.png';
import { Button } from '../../components/Button/Button.component';

export const Navbar = () => {
    const navigate = useNavigate();
    const goToLandingPage = () => navigate('/');
    const goToMe = () => navigate('/me');

    return (
        <>
            <nav className='Navbar glass-10 shadow-5 flex'>
                <div className='wrapper flex'>
                    <img className='weeev-logo transition-10' src={weeevLogo} onClick={goToLandingPage} />
                    <Button label='Minhas ideias' variant='secondary' size='small' onClick={goToMe} />
                </div>
            </nav>

            {/* Invisible navbar copy to push elements that are below navbar */}
            <div className='ghost-navbar'>
                <div className='wrapper flex'>
                    <img className='weeev-logo' src={weeevLogo} />
                    <Button label='Minhas ideias' variant='secondary' size='small' />
                </div>
            </div>

            <Outlet />
        </>
    );
}