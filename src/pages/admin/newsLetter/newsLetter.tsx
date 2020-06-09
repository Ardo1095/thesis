import React, { FC } from 'react';
import { Card, Table } from 'antd';

const columns = [
  {
    title: 'Email address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Subscription date',
    dataIndex: 'date',
    key: 'date',
  },
];

const NewsLetter: FC = () => (
  <Card style={{ width: '100%' }} title="News letter subscriptions">
    <Table columns={columns} dataSource={JSON.parse(localStorage.getItem('subscriptions'))} />
  </Card>
);

export default NewsLetter;
