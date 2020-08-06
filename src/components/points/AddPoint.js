import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';
import AddPointForm from './AddPointForm';

const AddPoint = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    const handleOk = e => {
        console.log('Received values of form: ',e);
        message.success('Processing complete!');
        setVisible(false);
    };
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
            Add point +
            </Button>
            {/* <AddPointForm
                visible={visible}
                onCreate={handleOk}
                onCancel={() => {
                  setVisible(false);
                }}
            /> */}
            <Modal
            visible={visible}
            footer={null}
            //onOk={handleOk}
            onCancel={handleCancel}
            >
            <AddPointForm/>
            </Modal>
        </>
    );
};

export default AddPoint;