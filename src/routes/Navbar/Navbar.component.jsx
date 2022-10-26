import { Outlet } from 'react-router-dom';

import './Navbar.scss';
import weeevLogo from '../../assets/images/weeev.png';
import { Button } from '../../components/Button/Button.component';

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className='normal-navbar glass-10 shadow-5 flex'>
                <img className='weeev-logo' src={weeevLogo} />
                <Button label='Minhas ideias' variant='secondary' size='small'/>
            </nav>

            {/* Invisible element to push elements that are below navbar */}
            <div className='ghost-navbar'>
                <img className='weeev-logo' src={weeevLogo} />
                <Button label='Minhas ideias' variant='tertiary' size='small'/>
            </div>

            <Outlet />
        </div>
    );
}