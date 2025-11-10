import React from 'react';
import { Link } from 'react-router-dom';
import './SiderbarOption.css';

function SidebarOption({ active, text, Icon, to }) {
  const content = (
    <>
      <Icon />
      <h2>{text}</h2>
    </>
  );

  return to ? (
    <Link to={to} className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      {content}
    </Link>
  ) : (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      {content}
    </div>
  );
}

export default SidebarOption;
