import { Outlet } from 'react-router-dom';

import './Navbar.scss';
import weeevLogo from '../../assets/images/weeev.png';
import { Button } from '../../components/Button/Button.component';

export const Navbar = () => {
    return (
        <>
            <nav className='Navbar glass-10 shadow-5 flex'>
                <div className='wrapper flex'>
                    <img className='weeev-logo transition-10' src={weeevLogo} />
                    <Button label='Minhas ideias' variant='secondary' size='small'/>
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