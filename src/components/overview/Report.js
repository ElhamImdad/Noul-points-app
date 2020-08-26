import React, {useState, useEffect} from 'react';
import '../../styles/overview.scss';
import '../../styles/my-theme.css';
import '../../fonts/Tajawal-Regular.ttf';
import { RangePickerPrimary } from "../global-styled-components/Inputs";
import { Button, Radio, Input, DatePicker, Table, Tag} from 'antd';
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";
import axios from "../../axios";

const Report = () => {
    const { Search } = Input;
    const Receiver = {name:"", phone:""};
    const Hold_by = {name:""};
    const initialTable = { tracking_id: "", receiver: Receiver, payment_status: "", cod_amount: "", hold_by:Hold_by };

    let [selectedRowKeys,setSelectedRowKeys] = useState([]);
    let [loading,setLoading] = useState(false);
    let [dataSelected,setDataSelected] = useState([]);
    let [orders, setOrders] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    let [dates, setDates] = useState([]);
    let isError = false;

    let property = ['trackingId', 'customerName','phone', 'paymentStatus', 'cost','point']
    const onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
        // setDataSelected(orders.filter(
        //     s1 => selectedRowKeys.some(
        //         s2 => s1.tracking_id === s2)).map(
        //     s => (property.reduce(
        //             (newS, data1) => {
        //                 newS[data1] = s[data1];
        //                 return newS;
        //             }, {})
        //     )
        //     )
        // );
        // const found = orders.filter((item) => {
        //     return console.log("item == ",item.tracking_id);
        //     // selectedRowKeys.includes(item.tracking_id);
        //   });
        // setDataSelected(found);
    };
    const selectRow = (record) => {
        const selectedRowKeys = [...selectedRowKeys];
        if (selectedRowKeys.indexOf(record.tracking_id) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(record.tracking_id), 1);
        } else {
          selectedRowKeys.push(record.tracking_id);
        }
        setSelectedRowKeys(selectedRowKeys);
    };
    // console.log('the data in new array',dataSelected);
    const hasSelected = selectedRowKeys.length > 0;
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };

    const dateFormat = "YYYY-MM-DD";
    let arr = [];
    let onDatesChange = (date) => {
        if (!isEmpty(date)) {
          arr.push((dayjs(date[0]).format(dateFormat)));
          arr.push((dayjs(date[1]).format(dateFormat)));
          setDates(arr);
        //   console.log("date selected---> ", arr);
        } else setDates([]);
      };
 
    const getPointsOrders = async (value,col) => {
        setLoading(true);
        console.log(col," clicked")
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
            params: {
                search: value,
                dateFrom: arr[0],
                dateTo: arr[1],
                status: col
            }
        };

        axios.get("/V1/point/orders", config)
            .then((response) => {
                setOrders(response.data.data);
                console.log("Report from Api", response.data)
            })
            .catch((error) => {
                console.log("AXIOS ERROR in getPointStatics: ", error);
                isError = true;
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        getPointsOrders();
    }, []);

    // const pData = [];
    // for (let i = 0; i < 20; i++) {
    //     pData.push({
    //         key: i,
    //         trackingId: 22,
    //         customerName: `Elham ${i}`,
    //         phone: 22,
    //         paymentStatus: ['unpaid'],
    //         cost: 22,
    //         point: 22,
    //     });
    // };

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
                                    onSearch={value => {
                                        // setSearchParams(value);
                                        getPointsOrders(value,"")
                                    }}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                {/* <DatePicker.RangePicker  */}
                                <RangePickerPrimary
                                // bordered={false}
                                // size={"large"}
                                    onChange={value => {
                                        onDatesChange(value);
                                        getPointsOrders()
                                    }}
                                    format={dateFormat}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                <Radio.Group>
                                    <Radio.Button value="All" onClick={() => {getPointsOrders("","all")}}>All</Radio.Button>
                                    <Radio.Button value="Collected"onClick={() => {getPointsOrders("","collected")}}>Collected</Radio.Button>
                                    <Radio.Button value="Released" onClick={() => {getPointsOrders("","released")}}>Released</Radio.Button>
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
                <Table 
                // loading={loading} 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={orders} 
                // pagination={true}
                onRow={(record) => ({
                    onClick: () => {
                      selectRow(record);
                      console.log("record");
                      console.log(record);
                    }
                  })}
                />
            </div>
        </div>
    );
};
// const columns = [
//     {title: 'Tracking ID', dataIndex: 'trackingId',},
//     {title: 'Customer name', dataIndex: 'customerName',},
//     {title: 'Phone', dataIndex: 'phone',},
//     {title: 'Payment Status', dataIndex: 'paymentStatus',
//     render: paymentStatus => (
//         <>
//           {paymentStatus.map(paymentStatus => {
//             let color = paymentStatus === 'unpaid' ? 'warning' : 'success';
//             return (
//               <Tag color={color} key={paymentStatus}>
//                 {paymentStatus}
//               </Tag>
//             );
//           })}
//         </>
//       ),
//     },
//     {title: 'Cost', dataIndex: 'cost',},
//     {title: 'Point', dataIndex: 'point',},
// ];

const columns = [
    {title: 'Tracking ID', dataIndex: 'tracking_id', key:'tracking_id',
    render: (key) => <a>{key}</a>,},
    {
        title: 'Customer name', dataIndex: 'receiver', render: reciver => {
            return <span>{reciver.name}</span>
        }
    },

    {
        title: 'Phone', dataIndex: 'receiver', render: reciver => {
            return <span dir="ltr">+966 {reciver.phone}</span>
        }
    },
    {
        title: 'Payment Status', dataIndex: 'payment_status', key: 'payment_status',
        render: payment_status => {
            return (
                <span>
                    {payment_status === "unpaid" ? (
                        <Tag color="orange">
                            {payment_status}
                        </Tag>
                    ) : (
                        <Tag color="green">
                            {payment_status}
                        </Tag>
                    )}
                </span>
            );
        }
    },
    {title: 'Cost', dataIndex: 'cod_amount', key:'cod_amount'},
    {
        title: 'Point', dataIndex: 'hold_by', key:'hold_by', render: point => {
            return <span>{point.name}</span>
        }
    },
];

export default Report;