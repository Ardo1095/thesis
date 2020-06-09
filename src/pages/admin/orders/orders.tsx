import React, { FC, useState } from 'react';
import { Card, Table, Tag } from 'antd';

const Orders: FC = () => {
  const [orders] = useState(JSON.parse(localStorage.getItem('orders')));

  const columns = [
    {
      title: 'Order',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Shipping address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Customer',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
      render: (text: string) => <Tag color="gold">{text}</Tag>,
    },
  ];

  return (
    <Card style={{ width: '100%' }} title="Orders">
      <Table dataSource={orders} columns={columns} />
    </Card>
  );
};

export default Orders;
