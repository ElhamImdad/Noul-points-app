import React, {useState, useEffect} from 'react';
import { Input, DatePicker } from 'antd';
import { Button, Radio  } from 'antd';
import { Table, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { RangePickerPrimary } from "../global-styled-components/Inputs";
import { CSVLink } from "react-csv";
import axios from "../../axios";
import dayjs from "dayjs";
import { isEmpty } from "lodash";

const PointReport = (point_id) => {
    const { Search } = Input;
    const {id} = point_id;

    let [selectedRowKeys,setSelectedRowKeys] = useState([]);
    let [dataSelected,setDataSelected] = useState([]);
    let [loading,setLoading] = useState(false);
    let [orders, setOrders] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    let [dates, setDates] = useState([]);
    let isError = false;

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
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
            params: {
                search: value,
                dateFrom: arr[0],
                dateTo: arr[1],
                // column: col
            }
        };

        axios.get(`/V1/point/users/${id}/orders`, config)
            .then((response) => {
                setOrders(response.data.data);
                console.log("response 1 point report", response.data);
                console.log("id in response point==> ", id);
            })
            .catch((error) => {
                console.log("AXIOS ERROR in get report 1 point: ", error);
                isError = true;
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        getPointsOrders();
        console.log("id in props==> ", id)
    }, []);

    let property = ['trackingId', 'customerName','phone', 'paymentStatus', 'cost','point']
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
    // const onSelectChange = selectedRowKeys => {
    //     console.log('selectedRowKeys changed: ', selectedRowKeys);
    //     setSelectedRowKeys( selectedRowKeys );    
    //     setDataSelected ( data.filter(
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
                            <strong className="font-20px"></strong>
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
                                        getPointsOrders(value,"");
                                    }}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                <RangePickerPrimary
                                    onChange={value => {
                                        onDatesChange(value);
                                        getPointsOrders();
                                    }}
                                    format={dateFormat}
                                />
                            </li>
                            <li className="mg-lr-5px">
                                <Radio.Group>
                                    <Radio.Button value="All">All</Radio.Button>
                                    <Radio.Button value="Collected">Collected</Radio.Button>
                                    <Radio.Button value="Released" onClick={() => {getPointsOrders("","Released")}}>Released</Radio.Button>
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
// const columns = [
//     {title: 'Tracking ID', dataIndex: 'trackingId',},
//     {title: 'Customer name', dataIndex: 'customerName',},
//     {title: 'Phone', dataIndex: 'phone',},
//     {title: 'Payment Status', dataIndex: 'paymentStatus',
//     render: paymentStatus => (
//         <>
//           {paymentStatus.map(paymentStatus => {
//             let color = paymentStatus === 'Unpaid' ? 'warning' : 'success';
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

// const data = [];
// for (let i = 0; i < 20; i++) {
//   data.push({
//     key: i,
//     trackingId: 22,
//     customerName: `Elham ${i}`,
//     phone: 22,
//     paymentStatus: ['Unpaid'],
//     cost: 22,
//     point: 22,
//   });
// }

export default PointReport;