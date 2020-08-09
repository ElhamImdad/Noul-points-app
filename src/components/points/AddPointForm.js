import React, { useState, useCallback } from 'react';
import {Modal, Button, Steps, message, Row , Col } from 'antd';
import { Formik, useField, Field,Form} from "formik";
import * as Yup from 'yup';
import {ProfileInput} from "../global-styled-components/Inputs";
import {PrimaryButton} from "../global-styled-components/Buttons";

const AddPointForm = () => {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
      Name: '',
      email: '',
      phone: '',
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
          />
        );
      case 2:
        return (
          <FormAddressDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      // case 3:
      //   return (
      //     // <Confirm formData={formData} />
      //     <Confirm formData={formData}>
      //       {/* {
      //         message.success('Processing complete!')
      //       } */}
      //     </Confirm>
          
      //   );
      default:
        return <></>;
    }
};
const validationSchema = Yup.object().shape({
    name: Yup.string()
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

    return (
      <>
        <Formik
          initialValues={formData}
          onSubmit={values => {
            console.log('in submit user detail')
            setFormData(values);
            nextStep();
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched,
          handleChange, handleBlur, handleSubmit,}) => (
            <Form >
              {/* <label> Name</label>
              <Field
                name='name'
                margin='normal'
                error={touched.name && errors.name}
              />
              <label>Email</label>
              <Field
                type='email'
                name='email'
                margin='normal'
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
              <label>phone</label>
              <Field
                name='phone'
                margin='normal'
                error={touched.phone && errors.phone}
              />
              <button
                type='submit'
                variant='contained'
                color='primary'
              >
                Next
              </button> */}

                <Row gutter={[16,16]}>
                    <Col xs={24}>
                        <label> Name</label>
                        <ProfileInput
                            name='name'
                            error={touched.name && errors.name}
                        />
                    </Col>

                    <Col xs={24}>
                        <label> Email</label>
                        <ProfileInput
                            name='email'
                            error={touched.email && errors.email}
                        />
                    </Col>

                    <Col xs={24}>
                        <label> Phone</label>
                        <ProfileInput
                            name='phone'
                            error={touched.phone && errors.phone}
                        />
                    </Col>
                    <Row justify="start">
                        <PrimaryButton
                          onClick={handleSubmit()}
                          variant='contained'
                          color='primary'
                        >
                            Next
                        </PrimaryButton>
                    </Row>
                </Row>
            </Form>
          )}
           </Formik>
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
            console.log("submit in FormAddressDetails ");
             direction === 'Previous' ? prevStep() : nextStep();
            //  resetForm({values:''})
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
        </div>
      </>
    );
  };
export default AddPointForm;