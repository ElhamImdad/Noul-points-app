import React from 'react';
import '../styles/overview.scss';
import { Input } from 'antd';
import { Button, Radio  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Report = () => {
    const { Search } = Input;
    return (
        <div className="Pd-lr-30px">
            <div className="tx-aln-right">

                <Search className="btn-tx-hv"
                        placeholder="Search by name or Tracking ID"
                        onSearch={value => console.log(value)}
                        style={{ width: 250 }}
                />

                <Radio.Group className="Pd-lr-10px">
                    <Radio.Button className="btn-tx-hv" value="All">All</Radio.Button>
                    <Radio.Button className="btn-tx-hv" value="Collected">Collected</Radio.Button>
                    <Radio.Button className="btn-tx-hv" value="Released">Released</Radio.Button>
                </Radio.Group>

                <Button className="img-btn" icon={<DownloadOutlined/>} />

            </div>
        </div>
    );
};

export default Report;