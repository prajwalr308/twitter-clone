import React from 'react';
import './BottomNav.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function BottomNav({ activeScreen, setActiveScreen }) {
    return (
        <div className="bottomNav">
            <div
                className={`bottomNav__icon ${activeScreen === 'home' ? 'bottomNav__icon--active' : ''}`}
                onClick={() => setActiveScreen('home')}
            >
                <HomeIcon />
            </div>
            <div
                className={`bottomNav__icon ${activeScreen === 'explore' ? 'bottomNav__icon--active' : ''}`}
                onClick={() => setActiveScreen('explore')}
            >
                <SearchIcon />
            </div>
            <div
                className={`bottomNav__icon ${activeScreen === 'notifications' ? 'bottomNav__icon--active' : ''}`}
                onClick={() => setActiveScreen('notifications')}
            >
                <NotificationsNoneIcon />
            </div>
            <div
                className={`bottomNav__icon ${activeScreen === 'messages' ? 'bottomNav__icon--active' : ''}`}
                onClick={() => setActiveScreen('messages')}
            >
                <MailOutlineIcon />
            </div>
        </div>
    );
}

export default BottomNav;
