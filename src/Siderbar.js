import React from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Siderbar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            <SidebarOption
                active={location.pathname === '/'}
                Icon={HomeIcon}
                text="Home"
                to="/"
            />
            <SidebarOption
                active={location.pathname === '/explore'}
                Icon={SearchIcon}
                text="Explore"
                to="/explore"
            />
            <SidebarOption
                active={location.pathname === '/notifications'}
                Icon={NotificationsNoneIcon}
                text="Notifications"
                to="/notifications"
            />
            <SidebarOption
                active={location.pathname === '/messages'}
                Icon={MailOutlineIcon}
                text="Messages"
                to="/messages"
            />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* button tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    )
}

export default Siderbar;
