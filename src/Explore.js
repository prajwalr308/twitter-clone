import React from 'react';
import './Explore.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Explore() {
    const trends = [
        {
            category: 'Technology · Trending',
            topic: 'AI Revolution',
            tweets: '125K'
        },
        {
            category: 'Sports · Trending',
            topic: 'Champions League',
            tweets: '89.2K'
        },
        {
            category: 'Entertainment · Trending',
            topic: '#Oscars2024',
            tweets: '234K'
        },
        {
            category: 'Technology · Trending',
            topic: 'React 19',
            tweets: '45.8K'
        },
        {
            category: 'Politics · Trending',
            topic: 'Climate Summit',
            tweets: '156K'
        }
    ];

    const whoToFollow = [
        {
            name: 'Tech Insider',
            username: 'techinsider',
            avatar: 'https://i.pravatar.cc/150?img=14',
            verified: true
        },
        {
            name: 'Sarah Developer',
            username: 'sarahdev',
            avatar: 'https://i.pravatar.cc/150?img=2',
            verified: false
        },
        {
            name: 'Design Daily',
            username: 'designdaily',
            avatar: 'https://i.pravatar.cc/150?img=6',
            verified: true
        }
    ];

    return (
        <div className="explore">
            <div className="explore__header">
                <div className="explore__searchContainer">
                    <SearchIcon className="explore__searchIcon" />
                    <input type="text" placeholder="Search Twitter" />
                </div>
            </div>

            <div className="explore__tabs">
                <div className="explore__tab">For you</div>
                <div className="explore__tab explore__tab--active">Trending</div>
                <div className="explore__tab">News</div>
                <div className="explore__tab">Sports</div>
                <div className="explore__tab">Entertainment</div>
            </div>

            <div className="explore__content">
                <div className="explore__section">
                    <h3 className="explore__sectionTitle">Trends for you</h3>
                    {trends.map((trend, index) => (
                        <div key={index} className="trend">
                            <div className="trend__info">
                                <p className="trend__category">{trend.category}</p>
                                <h4 className="trend__topic">{trend.topic}</h4>
                                <p className="trend__tweets">{trend.tweets} Tweets</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="explore__section">
                    <h3 className="explore__sectionTitle">Who to follow</h3>
                    {whoToFollow.map((user, index) => (
                        <div key={index} className="followSuggestion">
                            <Avatar src={user.avatar} className="followSuggestion__avatar" />
                            <div className="followSuggestion__info">
                                <div className="followSuggestion__name">
                                    {user.name}
                                    {user.verified && <span className="followSuggestion__verified">✓</span>}
                                </div>
                                <p className="followSuggestion__username">@{user.username}</p>
                            </div>
                            <button className="followSuggestion__button">Follow</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
