import React, { useState, useEffect} from "react";
// import "../style/layout.scss"
// import {useTranslation} from "react-i18next";
import { ConfigProvider, List, Modal, PageHeader,  Space} from "antd";
import styled from "styled-components";
// import i18next from "i18next";
import {observer} from "mobx-react-lite";
import {PrimaryButton} from "../global-styled-components/Buttons";
// import PointList from "./PointsList";
import {PlusCircleOutlined } from "@ant-design/icons"
// import {device} from "../../../styles/device";
import PointCard from "./point/PointCard";
import {StyledSearch} from "../global-styled-components/Inputs";
// import PointFormLayout from "./forms/point-form-layout";
import axios from "../../axios";

const Points = observer(() => {
    // const { t } = useTranslation();

    let [collapsed, setCollapsed] = useState(false);
    const [pointsData, setPointsData] = useState({ data: [] });
    const [searchParams,setSearchParams] = useState("");
    let isLoading = false;
    let isError = false;
    
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
        },
        params:{
            search:searchParams
        }
    };
    const getPointsOrders = async () => {
        isError = false;
        axios
          .get("/V1/point/users",config)
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
        getPointsOrders();
      }, []);

    const PointList =[];
    if (pointsData.length !== 0){    
        console.log("there is no data in pointList");
        pointsData.data.map(item => (
            PointList.push({
                // key: '1',
                name: item.name,
                address: `${item.district.name_en} - ${item.region.name_en}, ${item.city.name_en}.`,
                mobile: item.phone,
                map_link: item.map_link,
                on_hold: item.onhold_orders,
                released: item.released_orders,
                isActive: item.isActive,
                id: item.id
            })
        ));
    }
    // let data = PointList;

    const showAddForm = () => {
        setCollapsed(!collapsed);
    };

    const routes = [
        {
            path: "/",
            breadcrumbName: ("Dashboard.1"),
        },
        {
            path: "/points",
            breadcrumbName: ("Point.1"),
        },
    ];

    return (
        <div>

            <PageHeader
                className="site-page-header"
                title={("Point.1")}
                breadcrumb={{ routes }}
                extra={[
                    // <ConfigProvider direction={i18next.dir()}>
                        <Space>
                            <StyledSearch
                                placeholder="Search by name or Tracking ID"
                                onSearch={async (value) => {
                                    setSearchParams(value);
                                    getPointsOrders()
                                }}
                                height="available"
                            />,
                            <PrimaryButton className="excel-button" onClick={showAddForm}>
                                <i>
                                    <PlusCircleOutlined height={22} style={{marginInlineEnd:'8px'}}  alt="Excel" />
                                </i>

                                {("Point.add")}
                            </PrimaryButton>
                        </Space>
                    // </ConfigProvider>


                ]}
            />

            <Wrapper>
                {/* <ConfigProvider direction={i18next.dir()}> */}
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 2,
                            xl: 2,
                            xxl:2,
                        }}
                        style={{width: '-moz-available'}}
                        pagination={{
                            onChange: (page) => {},
                            pageSize: 12,
                        }}
                        dataSource={PointList}
                        renderItem={(item) => (
                            <PointCard item={item}/>
                        )}
                    />
                    <Modal
                        visible={collapsed}
                        title={("ChangeStatus.1")}
                        width={"45%"}
                        onCancel={showAddForm}
                        destroyOnClose={true}
                        footer={null}

                        onOk={()=>console.log("Submit")}
                    >
                        {/* <PointFormLayout/> */}
                    </Modal>
                {/* </ConfigProvider> */}
            </Wrapper>
        </div>
    );
});

const Wrapper = styled.div`
  margin: 1em;
   @media ({device.mobileL}) {
      margin: .5em;
    }
`;

export default Points;
