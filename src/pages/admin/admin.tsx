import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import AdminSidebar from './adminSidebar/admin.sidebar';
import Orders from './orders/orders';
import NewsLetter from './newsLetter/newsLetter';

const Admin: FC = () => (
  <div style={{ display: 'flex', flex: 1 }}>
    <AdminSidebar />
    <div style={{ marginLeft: 250, padding: 100, backgroundColor: '#eeeeee', display: 'flex', flex: 1 }}>
      <Route exact path="/admin" component={Orders} />
      <Route path="/admin/newsletter" component={NewsLetter} />
    </div>
  </div>
);

export default Admin;
