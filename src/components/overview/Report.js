import React, {useState, useEffect} from 'react';
import '../styles/overview.scss';
import '../styles/my-theme.css';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink, CSVDownload } from "react-csv";

const Report = () => {
    const { Search } = Input;

    const [selectedRowKeys,setSelectedRowKeys] = useState([]);
    const [loading,setLoading] = useState(false);

    const start = () => {
        setLoading(true);
       
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys({ selectedRowKeys });
    };

    //const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
        <div>
            <div className="">
                <ul className="flex-container space-between" >
                    <li>
                        <label>
                            <strong className="font-20px">Report</strong>
                        </label>
                    </li> 

                    <li>  
                    <span className="tx-aln-end">
                        <ul className="flex-container space-between">
                            <li className="mg-lr-5px">
                                <Search
                                    placeholder="Search by name or Tracking ID"
                                    onSearch={value => console.log(value)}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                <DatePicker.RangePicker/>
                            </li>
                            <li className="mg-lr-5px">
                                <Radio.Group>
                                    <Radio.Button value="All">All</Radio.Button>
                                    <Radio.Button value="Collected">Collected</Radio.Button>
                                    <Radio.Button value="Released">Released</Radio.Button>
                                </Radio.Group>
                            </li>
                            <li>
                            <Button className="img-btn mg-lr-5px" icon={<DownloadOutlined/>} />
                            </li>
                        </ul>
                    </span>
                    </li>
                </ul>
                <br/>
            </div>

            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
                </div>
                <Table rowSelection={onSelectChange} columns={columns} dataSource={data} />
            </div>

            <div>
                <Button variant="warning">
                    <CSVLink data={data} filename={"NoulReport.csv"} target="_blank"
                        onClick={() => {
                            console.log("You click the link"); // 👍🏻 Your click handling logic
                          }}
                    >Export</CSVLink>
                </Button>
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