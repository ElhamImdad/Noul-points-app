import React, { useState } from 'react';
import { Modal, Button, Steps, message } from 'antd';
//import { Form } from "antd";
import { Formik, useField, Field,Form } from "formik";
import * as Yup from 'yup';
import { MyLabel } from "../global-styled-components/Labels";
import { PrimaryInput } from "../global-styled-components/Inputs";

// const { Step } = Steps;

const FirstContent = (formikProps ) => {
   const { errors, touched } = formikProps;
   console.log("FirstContent");
  return (
    <>
       
      <h1>Point user info</h1>
      {/* <MyTextInput label="name" name="Name" type="text" placeholder="noul company"/>
      <MyTextInput label="email" name="Email" type="email" placeholder="example@gmail.com"/>
      <MyTextInput label="phone" name="Phone_No" type="text" placeholder="966500000000"/> */}
      <Field
        name="Name"
        label="Name"
         error={touched.Name && errors.Name}
         helperText={touched.Name && errors.Name}
      />  
      <pre>{JSON.stringify(errors)}</pre>
      {/* <MyLabel>Email</MyLabel>
              <PrimaryInput
                placeholder="email@example.com"
                type="email"
                name="email"
                autoComplete="on"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {/* {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null} */} 
    </>
  ) 
};
const SecondContent = () => {
  return (
  <div>Second-content</div>
  )
  
};

const steps = [
  FirstContent
    // title: 'First',
    // content: 'First-content',
  ,
  SecondContent
    // title: 'Second',
    // content: 'Second-content',
];

// const renderStep = (step, values, errors, touched) => {
//   switch (step) {
//     case 1:
//       return <FirstContent errors={errors} touched={touched} />;
//     case 2:
//       return <SecondContent errors={errors} touched={touched} />;
//     case 3:
//   return <p>in case 3 ----{values={values}}</p>
//       // return <FormSuccess values={values} />;
//     default:
//       return <FirstContent errors={errors} touched={touched} />;
//   }
// };

const AddUserPoint = () => {
    const [state, setState] = useState({visible: false});
    const [currents, setCurrents] = useState({current: 0});
    const [step, setStep] = useState(1);

    const pointUserData = {
      Name: '',
      email: '',
      Phone_No: '',
      Commercial_Register_Number: '',
      Noul_Register_Number: '',
    };

    const handleonSubmit = (values, actions) => {
      console.log('values in handleSubmit ---> '+values.Name);
    };
    
    //setStep(step => step + 1);
    let pointUser = pointUserData;
    
    const validationSchema = Yup.object().shape({
      Name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required(("InputRequired.1")),
      Email: Yup.string()
        .email(("EmailValidation.1"))
        .max(100, "*Email must be less than 100 characters")
        .required(("InputRequired.1")),
      Phone_No: Yup.number()
        .required(("InputRequired.1")),
      //  .positive(),
      Commercial_Register_Number: Yup.mixed()
        .required("A file is required")
        .test(
          "fileSize",
          "File too large",
          value => value && value.size <= 10000
        )
        .test(
          "fileFormat",
          "PDF only",
          value => value && ['application/pdf'].includes(value.type)
        )
    
    });
  
    const showModal = () => {
        setState({ visible: true,});
    };
    const handleOk = e => {
        console.log(e);
        message.success('Processing complete!');
        setState({ visible: false,});
    };
    const handleCancel = e => {
        console.log(e);
        setState({ visible: false,});
    };

    const next =()=> {
      const current = currents.current + 1;
      setCurrents({ current });
    }
  
    const prev =()=> {
      const current = currents.current - 1;
      setCurrents({ current });
    }
    const { current } = currents;
//     const StepButton = props => {
//   const { step } = props;
//   switch (step) {
//     case 1:
//       return (
//         <>
//           <Button 
//           type="primary"
//           // color="primary"
//           //   type="submit"
//              onClick={() => next()}>
//                     Next
//           </Button>
//         </>
//       );
//     case 2:
//       return (
//         <>
//           <Button type="primary" onClick={() => handleOk()}>
//                     Done
//                   </Button>

//                   <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
//                     Previous
//                   </Button>
//         </>
//       );
//     default:
//       return <></>;
//   }
// };
    return (
        <>
            <Button type="primary" onClick={showModal}>
            Add point +
            </Button>
            <Modal
            // title="Basic Modal"
            visible={state.visible}
            footer={null}
            //onOk={handleOk}
            onCancel={handleCancel}
            >
            <>
              {/* <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps> */}

              <Formik
                enableReinitialize
                initialValues={pointUser}
                onSubmit={handleOk}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched,
                handleChange, handleBlur, handleSubmit, }) => (
                  <Form className="login-form">
                    <Form.Item>
                      {/* {renderStep(step, values, errors, touched)} */}
                      {/* {renderStep( values, errors, touched)} */}
                      {/* <StepButton step={step} /> */}
                      <div className="steps-content">{steps[current](values, errors, touched)}</div>
                      <div className="steps-action">
                        {current < steps.length - 1 && (
                          <Button type="primary" onClick={() => next()}>
                            Next
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button type="submit" onClick={() => handleSubmit()}>
                            Done
                          </Button>
                        )}
                        {current > 0 && (
                          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                          </Button>
                        )}
                      </div>
                    </Form.Item>
                  </Form>
                )}
              </Formik>

              
            </>
            </Modal>
        </>
    );
};



// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.name}>{label}</label>
//       <input className="text-input" {...field}{...props} />
//       {meta.touched && meta.error ? (
//         <div className="error-message">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

export default AddUserPoint;