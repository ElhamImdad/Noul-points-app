import React, {useState, useEffect} from 'react';
import '../../styles/overview.scss';
import '../../styles/my-theme.css';
import '../../fonts/Tajawal-Regular.ttf';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { Table, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink, CSVDownload } from "react-csv";
import axios from "../../axios";

const Report = () => {
    const { Search } = Input;

    let [selectedRowKeys,setSelectedRowKeys] = useState([]);
    //let [loading,setLoading] = useState(false);
    let [dataSelected,setDataSelected] = useState([]);
    const [pointsData, setPointsData] = useState({ data: [] });
    let isLoading = false;
    let isError = false;

    // const start = () => {
    //     setLoading(true);
       
    //     setTimeout(() => {
    //         setDataSelected([]);
    //         setSelectedRowKeys([]);
    //         setLoading(false);
    //     }, 1000);
    // };
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
        },
    };
    
    const getPointsReport = () => {
        isError = false;
    
        axios
          .get("/V1/point/orders", config)
          .then((response) => {
            setPointsData(response.data);
            console.log("Report from Api",response.data)
          })
          .catch((error) => {
            console.log("AXIOS ERROR in getPointStatics: ", error);
            isError = true;
          })
          .finally(() => {
            isLoading = false;
          });
    };
    useEffect(() => {
        getPointsReport();
      }, []);

    const pData = [];
    for (let i = 0; i < 20; i++) {
        pData.push({
            key: i,
            trackingId: 22,
            customerName: `Elham ${i}`,
            phone: 22,
            paymentStatus: ['unpaid'],
            cost: 22,
            point: 22,
        });
    }
    // if (pointsData.length !== 0){    
    //     console.log("there is no data in Api");
    //     pointsData.data.map(item => (
    //         pData.push({
    //             // key: i,
    //             trackingId: item.tracking_id,
    //             customerName: item.receiver.receiver_name,
    //             phone: item.receiver.receiver_phone,
    //             paymentStatus: [item.payment_status],
    //             cost: item.cod_amount,
    //             point: item.hold_by.name,
    //         })
    //     ));
    // }
    
    let property = ['trackingId', 'customerName','phone', 'paymentStatus', 'cost','point']
    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys( selectedRowKeys );    
        setDataSelected ( pData.filter(
            s1 => selectedRowKeys.some(
                s2 => s1.key === s2)).map(
                    s => (property.reduce(
                        (newS, data1) => {
                            newS[data1] = s[data1];
                            return newS;
                        }, {})
                    )
                )
        );
    };
    console.log('the data in new array',dataSelected);
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
        <div>
            <div className="">
                <ul className="flex-container space-between mg-top-5px" >
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
                                { hasSelected?
                                <CSVLink data={dataSelected} filename={"NoulReport.csv"} target="_blank">
                                    <Button className="img-btn mg-lr-5px" icon={<DownloadOutlined/>}></Button>
                                </CSVLink>
                                : <Button className="img-btn mg-lr-5px" icon={<DownloadOutlined/>}></Button>
                                }
                            </li>
                        </ul>
                    </span>
                    </li>
                </ul>
                <br/>
            </div>

            <div style={{ marginBottom: 8 }}>
                <div>
                {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span> */}
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={pData} />
            </div>
        </div>
    );
};
const columns = [
    {title: 'Tracking ID', dataIndex: 'trackingId',},
    {title: 'Customer name', dataIndex: 'customerName',},
    {title: 'Phone', dataIndex: 'phone',},
    {title: 'Payment Status', dataIndex: 'paymentStatus',
    render: paymentStatus => (
        <>
          {paymentStatus.map(paymentStatus => {
            let color = paymentStatus === 'unpaid' ? 'warning' : 'success';
            return (
              <Tag color={color} key={paymentStatus}>
                {paymentStatus}
              </Tag>
            );
          })}
        </>
      ),
    },
    {title: 'Cost', dataIndex: 'cost',},
    {title: 'Point', dataIndex: 'point',},
];

export default Report;