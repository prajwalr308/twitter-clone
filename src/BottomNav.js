import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function BottomNav() {
    const location = useLocation();

    return (
        <div className="bottomNav">
            <Link to="/" className={`bottomNav__icon ${location.pathname === '/' ? 'bottomNav__icon--active' : ''}`}>
                <HomeIcon />
            </Link>
            <Link to="/explore" className={`bottomNav__icon ${location.pathname === '/explore' ? 'bottomNav__icon--active' : ''}`}>
                <SearchIcon />
            </Link>
            <Link to="/notifications" className={`bottomNav__icon ${location.pathname === '/notifications' ? 'bottomNav__icon--active' : ''}`}>
                <NotificationsNoneIcon />
            </Link>
            <Link to="/messages" className={`bottomNav__icon ${location.pathname === '/messages' ? 'bottomNav__icon--active' : ''}`}>
                <MailOutlineIcon />
            </Link>
        </div>
    );
}

export default BottomNav;
