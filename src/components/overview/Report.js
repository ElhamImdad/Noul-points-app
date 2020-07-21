import React from 'react';
import '../styles/overview.scss';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Report = () => {
    const { Search } = Input;
    return (
        <div className="Pd-lr-30px">
            <div className="tx-aln-end">
                <label>
                    <strong className="font-20px" style={{float: "inline-start"}}>Report</strong>
                </label>

                <Search className="btn-tx mg-10px"
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
        </div>
    );
};

export default Report;