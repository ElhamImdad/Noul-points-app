import React, { useState, useCallback } from 'react';
import {  Modal, Button, Steps, message } from 'antd';
import { Formik, useField, Field,Form } from "formik";
import * as Yup from 'yup';

const AddPointForm = () => {
    const [step, setStep] = useState(1);
    
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        Phone_No: '',
        Commercial_Register_Number: '',
        Noul_Register_Number: '',
        long: 0,
        lat: 0,
        address: '',
        label1: '',
    });
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);
    
    switch (step) {
        case 1:
          return (
            <FormUserDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              // visible={visible}
              // onCreate={onCreate}
              // onCancel={onCancel}
            />
          );
        case 2:
          return (
            <FormAddressDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              // visible={visible}
              // onCreate={onCreate}
              // onCancel={onCancel}
            />
          );
        case 3:
          return (
            // <Confirm formData={formData} />
            <Confirm formData={formData}>
              {/* {
                message.success('Processing complete!')
              } */}
            </Confirm>
            
          );
        default:
          return <></>;
      }
};
const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(15, 'Must be 15 characters or less')
      .required(("InputRequired.1")),
    email: Yup.string()
      .email(("EmailValidation.1"))
      .max(100, "*Email must be less than 100 characters")
      .required(("InputRequired.1")),
    // Phone_No: Yup.number()
    //   .required(("InputRequired.1")),
    //  .positive(),
    // Commercial_Register_Number: Yup.mixed()
    //   .required("A file is required")
    //   .test(
    //     "fileSize",
    //     "File too large",
    //     value => value && value.size <= 10000
    //   )
    //   .test(
    //     "fileFormat",
    //     "PDF only",
    //     value => value && ['application/pdf'].includes(value.type)
    //   )
});
const FormUserDetails = ({ formData, setFormData, nextStep}) => {
  //const [form] = Form.useForm();
    return (
      <>
        
          {/* <Modal
          visible={visible}
          okText="Next"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then(values => {
                form.resetFields();
                onCreate(values);
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
          }}
          > */}
        <Formik
          initialValues={formData}
          onSubmit={values => {
            console.log('in submit user detail')
            setFormData(values);
            nextStep();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form >
                <label> Name</label>
              <Field
                name='Name'
                // label='First Name *'
                margin='normal'
             
                error={touched.Name && errors.Name}
                helperText={touched.firstName && errors.firstName}
              />
              <label>Email</label>
              <Field
                type='email'
                name='email'
               // label='Email *'
                margin='normal'
             
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
              <label>phone</label>
              <Field
                name='Phone_No'
                //label='Phone_No *'
                margin='normal'
             
                error={touched.lastName && errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <button
                type='submit'
                variant='contained'
                color='primary'
              >
                Next
              </button>
            </Form>
          )}
           </Formik>
           {/* </Modal> */}
       
       
      </>
    );
};

const FormAddressDetails = ({formData, setFormData, nextStep, prevStep}) => {
    const [direction, setDirection] = useState('Previous');
    const [visible, setVisible] = useState(true);
   
    const handleOk = e => {
      console.log(e);
      message.success('Processing complete!');
       setVisible(false);
       
     };
    return (
      <>
        <Formik
          initialValues={formData}
          onSubmit={(values, {resetForm}) => {
            setFormData(values);
             direction === 'Previous' ? prevStep() : nextStep();
            //  resetForm({values:''})
            // direction === 'Previous' ? prevStep() : resetForm({values:''});
          }}
        >
          <Form >
            <Field
              name='long'
              label='long'
              margin='normal'
          
            />
            <Field name='lat' label='lat' margin='normal' />
            <Field name='address' label='address' margin='normal' />
            <div>
              <button
                type='submit'
                variant='contained'
                color='primary'
               
                onClick={() => setDirection('Previous')}
              >
                Previous
              </button>
              <button
                type='submit'
                variant='contained'
                color='primary'
                onClick={() => {
                    setDirection('done');
                    // handleOk();
                }}
              >
                Done
              </button>
            </div>
          </Form>
        </Formik>
      </>
    );
};
const Confirm = ({ formData }) => {
    const { Name, email, Phone_No, long, lat, address } = formData;
    // const [visible, setVisible] = useState(true);
    
    const handleOk = e => {
      console.log(e);
      // message.success('Processing complete!');
      // setVisible(false);
      Modal.destroy()
     };
    return (
      <>
       
        <div>
        {
            console.log('Name ==> ',Name)
        }
        {
            console.log('Name ==> ',address)
        }
        {/* {handleOk()} */}
     
          {/* <div >
            <button
              color='secondary'
              variant='contained'
              onClick={() => prevStep()}
            >
              Back
            </button>
  
            <button
              color='primary'
              variant='contained'
              onClick={() => nextStep()}
            >
              Confirm and Continue
            </button>
          </div> */}
        </div>
      </>
    );
  };
export default AddPointForm;