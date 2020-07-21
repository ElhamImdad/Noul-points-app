import React from 'react';
import { Table, Button } from 'antd';

const columns = [
    {title: 'Tracking ID', dataIndex: 'trackingId',},
    {title: 'Customer name', dataIndex: 'customerName',},
    {title: 'Phone', dataIndex: 'phone',},
    {title: 'Payment Status', dataIndex: 'paymentStatus',},
    {title: 'Cost', dataIndex: 'cost',},
    {title: 'Point', dataIndex: 'point',},
];

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    trackingId: 22,
    customerName: `Elham ${i}`,
    phone: 22,
    paymentStatus: 22,
    cost: 22,
    point: 22,
  });
}

class OverviewText extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default OverviewText;
