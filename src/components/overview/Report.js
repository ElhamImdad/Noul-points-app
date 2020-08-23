import React, {useState, useEffect} from 'react';
import '../../styles/overview.scss';
import '../../styles/my-theme.css';
import '../../fonts/Tajawal-Regular.ttf';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { Table, Tag } from 'antd';
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";
import axios from "../../axios";

const Report = () => {
    const { Search } = Input;

    let [selectedRowKeys,setSelectedRowKeys] = useState([]);
    let [loading,setLoading] = useState(false);
    let [dataSelected,setDataSelected] = useState([]);
    let [orders, setOrders] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    let [dates, setDates] = useState([]);
    let isError = false;
    
    const dateFormat = "YYYY-MM-DD";
    let onDatesChange = (date, dateString) => {
        if (!isEmpty(date)) {
          let arr = [];
          arr.push(new Date(dayjs(date[0]).format(dateFormat)));
          arr.push(new Date(dayjs(date[1]).format(dateFormat)));
          setDates(arr);
          console.log("date selected ", arr);
        } else setDates([]);
      };
      console.log("date in stat ==> ",dates);
 
    const getPointsOrders = async (value) => {
        setLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
            params: {
                search: value,
                // dateFrom: '2020-07-08',
                // dateTo: '2020-07-13'
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
    
    let property = ['trackingId', 'customerName','phone', 'paymentStatus', 'cost','point']
    // const onSelectChange = selectedRowKeys => {
    //     console.log('selectedRowKeys changed: ', selectedRowKeys);
    //     setSelectedRowKeys( selectedRowKeys );    
    //     setDataSelected ( pData.filter(
    //         s1 => selectedRowKeys.some(
    //             s2 => s1.key === s2)).map(
    //                 s => (property.reduce(
    //                     (newS, data1) => {
    //                         newS[data1] = s[data1];
    //                         return newS;
    //                     }, {})
    //                 )
    //             )
    //     );
    // };
    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
        setDataSelected(orders.filter(
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
    // console.log('the data in new array',dataSelected);
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
                                    onSearch={value => {
                                        // setSearchParams(value);
                                        getPointsOrders(value)
                                    }}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                <DatePicker.RangePicker 
                                // bordered={false}
                                // size={"large"}
                                onChange={value => {
                                    setSearchParams(value);
                                    getPointsOrders()
                                }}
                                format={dateFormat}
                                />
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
                <Table rowSelection={rowSelection} columns={columns} dataSource={orders} />
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
    {title: 'Tracking ID', dataIndex: 'tracking_id',},
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
        title: 'Payment Status', dataIndex: 'payment_status',
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
    {title: 'Cost', dataIndex: 'cod_amount'},
    {
        title: 'Point', dataIndex: 'hold_by', render: point => {
            return <span>{point.name}</span>
        }
    },
];

export default Report;