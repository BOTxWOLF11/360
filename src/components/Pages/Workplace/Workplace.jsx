import React from 'react';
import { Table, Button } from 'antd';

import './Workplace.scss';

const Dashboard = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            align: 'center',
            render: (text) => <div className="ellipsis-text">{text}</div>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            ellipsis: true,
            render: (text) => <div className="ellipsis-text">{text}</div>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 120,
            align: 'center',
            filters: [
                {
                    text: 'Unresolved',
                    value: 'unresolved',
                },
                {
                    text: 'Resolved',
                    value: 'resolved',
                },
            ],
            onFilter: (value, record) => record.status.toLowerCase() === value,
            render: (text) => (
                <div className={`status-tag ${text.toLowerCase()}`}>{text}</div>
            ),
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            width: 120,
            align: 'center',
            render: (tags) => (
                <div className="tags-container">
                    {tags.split(',').map((tag) => (
                        <span key={tag} className="tag">
              {tag}
            </span>
                    ))}
                </div>
            ),
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width: 120,
            align: 'center',
            render: () => {
                return (
                    <Button type="link"onClick={() => {  }}>
                        Some
                    </Button>
                );
            },
        },
    ];

    const data = [
        {
            id: 1,
            title: 'This is a title',
            status: 'Unresolved',
            tags: 'bug,feature',
            actions: '',
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
                position: ['bottomCenter'],
                total: 30,
                pageSize: 5,
                showQuickJumper: false,
            }}
            className="my-table"
        />
    );
};

export default Dashboard;