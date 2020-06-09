import React, { FC } from 'react';
import './admin.sidebar.css';
import SidebarItem from './sidebarItem/sidebar.item';

const AdminSidebar: FC = () => (
  <div className="adminSidebarContainer">
    <SidebarItem route="/admin" routeName="orders" />
    <SidebarItem route="/admin/newsletter" routeName="news letter" />
    <SidebarItem onClick={() => localStorage.removeItem('admin')} routeName="Log out" route="/" />
  </div>
);

export default AdminSidebar;
