import React, { useState} from "react";
// import "../style/layout.scss"
// import {useTranslation} from "react-i18next";
import { ConfigProvider, List, Modal, PageHeader,  Space} from "antd";
import styled from "styled-components";
// import i18next from "i18next";
import {observer} from "mobx-react-lite";
import {PrimaryButton} from "../global-styled-components/Buttons";
import PointList from "./PointsList";
import {PlusCircleOutlined } from "@ant-design/icons"
// import {device} from "../../../styles/device";
import PointCard from "./point/PointCard";
import {StyledSearch} from "../global-styled-components/Inputs";
// import PointFormLayout from "./forms/point-form-layout";

const Points = observer(() => {
    // const { t } = useTranslation();

    let [collapsed, setCollapsed] = useState(false);
    let data = PointList;

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
                                onSearch={value => console.log(value)}
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
                        dataSource={data}
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
