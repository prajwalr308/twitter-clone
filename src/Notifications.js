import React from 'react';
import './Notifications.css';
import { Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RepeatIcon from '@material-ui/icons/Repeat';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Notifications() {
    const notifications = [
        {
            type: 'like',
            user: 'Sarah Chen',
            username: 'sarahchen',
            avatar: 'https://i.pravatar.cc/150?img=1',
            tweet: 'Just shipped a new feature! 🚀',
            time: '2h'
        },
        {
            type: 'retweet',
            user: 'Mike Johnson',
            username: 'mikej',
            avatar: 'https://i.pravatar.cc/150?img=12',
            tweet: 'Working on the new UI design',
            time: '4h'
        },
        {
            type: 'follow',
            user: 'Emma Wilson',
            username: 'emmaw',
            avatar: 'https://i.pravatar.cc/150?img=5',
            time: '6h'
        },
        {
            type: 'like',
            user: 'David Kim',
            username: 'davidk',
            avatar: 'https://i.pravatar.cc/150?img=8',
            tweet: 'Amazing weather today!',
            time: '1d'
        },
        {
            type: 'retweet',
            user: 'Lisa Park',
            username: 'lisapark',
            avatar: 'https://i.pravatar.cc/150?img=9',
            tweet: 'Check out this cool tutorial',
            time: '1d'
        },
        {
            type: 'follow',
            user: 'James Brown',
            username: 'jamesbrown',
            avatar: 'https://i.pravatar.cc/150?img=13',
            time: '2d'
        }
    ];

    const renderIcon = (type) => {
        switch(type) {
            case 'like':
                return <FavoriteIcon className="notification__icon notification__icon--like" />;
            case 'retweet':
                return <RepeatIcon className="notification__icon notification__icon--retweet" />;
            case 'follow':
                return <PersonAddIcon className="notification__icon notification__icon--follow" />;
            default:
                return null;
        }
    };

    const renderNotification = (notification, index) => {
        return (
            <div key={index} className="notification">
                <div className="notification__iconContainer">
                    {renderIcon(notification.type)}
                </div>
                <div className="notification__content">
                    <Avatar src={notification.avatar} className="notification__avatar" />
                    <div className="notification__text">
                        <p>
                            <strong>{notification.user}</strong>
                            {notification.type === 'like' && ' liked your Tweet'}
                            {notification.type === 'retweet' && ' retweeted your Tweet'}
                            {notification.type === 'follow' && ' followed you'}
                        </p>
                        {notification.tweet && (
                            <p className="notification__tweet">{notification.tweet}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="notifications">
            <div className="notifications__header">
                <h2>Notifications</h2>
            </div>
            <div className="notifications__tabs">
                <div className="notifications__tab notifications__tab--active">All</div>
                <div className="notifications__tab">Mentions</div>
            </div>
            <div className="notifications__list">
                {notifications.map((notification, index) => renderNotification(notification, index))}
            </div>
        </div>
    );
}

export default Notifications;
