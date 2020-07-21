import React, {useState, useEffect} from 'react';
import '../styles/overview.scss';
import '../styles/my-theme.css';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Report = () => {
    const { Search } = Input;

    const [selectedRowKeys,setSelectedRowKeys] = useState([]);
    //const [loading,setLoading] = useState(false);

    const start = () => {
      //  setLoading(true);
       
        setTimeout(() => {
            setSelectedRowKeys([]);
           // setLoading(false);
        }, 1000);
    };

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys({ selectedRowKeys });
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
        <div className="Pd-lr-30px">
            <div className="tx-aln-end">
                <label className="tx-aln-start" style={{float: "inline-start"}}>
                    <strong className="font-20px" style={{float: "inline-start"}}>Report</strong>
                </label>

                <Search className="btn-tx mg-lr-10px"
                        placeholder="Search by name or Tracking ID"
                        onSearch={value => console.log(value)}
                        style={{ width: '16%' }}/>

                <DatePicker.RangePicker className="btn-tx"
                                        style={{ width: '16%', placeholder: 'From' }} />

                <Radio.Group className="Pd-lr-10px">
                    <Radio.Button className="btn-tx" value="All">All</Radio.Button>
                    <Radio.Button className="btn-tx" value="Collected">Collected</Radio.Button>
                    <Radio.Button className="btn-tx" value="Released">Released</Radio.Button>
                </Radio.Group>

                <Button className="img-btn" icon={<DownloadOutlined/>} />
                
            </div>

            <div>
                <div style={{ marginBottom: 16 }}>
                {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button> */}
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>

        </div>
    );
};
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

export default Report;