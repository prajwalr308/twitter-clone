import React from 'react';
import './Messages.css';
import { Avatar } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Messages() {
    const conversations = [
        {
            user: 'Alex Turner',
            username: 'alexturner',
            avatar: 'https://i.pravatar.cc/150?img=3',
            lastMessage: 'Hey! Did you see the new update?',
            time: '2m',
            unread: true
        },
        {
            user: 'Sophie Martinez',
            username: 'sophiem',
            avatar: 'https://i.pravatar.cc/150?img=5',
            lastMessage: 'Thanks for the help yesterday!',
            time: '1h',
            unread: true
        },
        {
            user: 'Ryan Cooper',
            username: 'ryanc',
            avatar: 'https://i.pravatar.cc/150?img=7',
            lastMessage: 'Sounds good, let\'s catch up tomorrow',
            time: '3h',
            unread: false
        },
        {
            user: 'Nina Patel',
            username: 'ninap',
            avatar: 'https://i.pravatar.cc/150?img=9',
            lastMessage: 'I sent you the files you requested',
            time: '5h',
            unread: false
        },
        {
            user: 'Tom Anderson',
            username: 'tomanderson',
            avatar: 'https://i.pravatar.cc/150?img=12',
            lastMessage: 'Great meeting today!',
            time: '1d',
            unread: false
        },
        {
            user: 'Emily Chen',
            username: 'emilychen',
            avatar: 'https://i.pravatar.cc/150?img=1',
            lastMessage: 'See you at the conference',
            time: '2d',
            unread: false
        }
    ];

    return (
        <div className="messages">
            <div className="messages__header">
                <h2>Messages</h2>
                <MailOutlineIcon className="messages__headerIcon" />
            </div>
            <div className="messages__search">
                <input type="text" placeholder="Search Direct Messages" />
            </div>
            <div className="messages__list">
                {conversations.map((conversation, index) => (
                    <div key={index} className={`message ${conversation.unread ? 'message--unread' : ''}`}>
                        <Avatar src={conversation.avatar} className="message__avatar" />
                        <div className="message__content">
                            <div className="message__header">
                                <div className="message__user">
                                    <span className="message__name">{conversation.user}</span>
                                    <span className="message__username">@{conversation.username}</span>
                                    <span className="message__time">· {conversation.time}</span>
                                </div>
                            </div>
                            <p className="message__text">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread && <div className="message__unreadDot"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Messages;
