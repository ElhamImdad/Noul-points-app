import React from 'react';

const pointHome = () => {
    return (
        <>
        <StyeldPageHeader
            className="webview-header ant-page-header-heading-title"
            onBack={() => null}
            title="Home"
            extra={<SettingOutlined />}
        >
        </StyeldPageHeader>
        <Content className="webview-container">
            <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Card 
                        style={{borderRadius: '7px'}}  bordered={false}>
                            <Row justify="space-around">
                                <strong className="color_primary">4</strong>
                                <span className="cd-content">Deliverd</span>
                            </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Card 
                        style={{borderRadius: '7px'}}  bordered={false}>
                        <Row justify="space-around">
                            <strong className="color_primary">4</strong>
                            <span className="cd-content">In Store</span>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Card 
                        style={{borderRadius: '7px'}}  bordered={false}>
                        <Row justify="space-around">
                            <strong className="color_primary">4</strong>
                            <span className="cd-content">Canceled</span>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Card 
                        style={{borderRadius: '7px'}}  bordered={false}>
                        <Row justify="space-around">
                            <strong className="color_primary">4</strong>
                            <span className="cd-content">On going</span>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <Row justify="space-around">
                                <img src={trackingBlue}/>
                                <h3><strong>Released Shipments</strong></h3>
                                <h4>Scan the barcode</h4>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <Row justify="space-around">
                                <img src={trackingBlue}/>
                                <h3><strong>Receive Shipments</strong></h3>
                                <h4>Scan the barcode</h4>
                            </Row>
                        </Card>
                    </Col>
                </Row>
        </Content>
        </>
    );
};

export default pointHome;