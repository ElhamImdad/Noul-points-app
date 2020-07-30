import React, { Fragment, useContext, useState } from "react";
import axios from 'axios';
import { Form } from "antd";
import { MyLabel } from "../global-styled-components/Labels";
import { PrimaryInput } from "../global-styled-components/Inputs";
import { PrimaryButton } from "../global-styled-components/Buttons";
import { Formik } from "formik";
import { string, object } from 'yup';
import { Link, useHistory } from "react-router-dom";

const LoginForm = (props) => {
  let history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [data, setData] = useState({});

  // User @object
  const userData = {
    email: "",
    password: "",
  };

  let user = userData;

  // Yup Validations
  const validationSchema = object().shape({
    email: string()
      .email(("EmailValidation.1"))
      .max(100, "*Email must be less than 100 characters")
      .required(("InputRequired.1")),
    password: string()
      .min(4, ("FourChartValidation.1"))
      .max(32)
      .required(("InputRequired.1")),
  });

  const handleOnSubmit = (values, actions) => {
    console.log('values ---> '+values.email);
    const postData = {
      email: values.email,
      password: values.password,
    };
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }};
    axios.post('https://dev.api.noul.net/api/V1/auth/login', postData, axiosConfig)
    .then((res) => {
        //console.log("from response ==>  "+res.data.accessToken);
        setData(res.data);
        if (res.data.accessToken !== null){
          history.push("/home");
        }
     
        const { token } = res.data.accessToken;
        //localStorage.setItem('token', token);
        sessionStorage.setItem('token', token);
        actions.setSubmitting(false);
        actions.resetForm();
    })
    .catch((err) => {
      actions.setSubmitting(false);
      console.log("AXIOS ERROR: ", err);
    });
  };

  
  return (
    <Fragment>
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values, errors, touched,
          handleChange, handleBlur, handleSubmit,
        }) => (
          <Form className="login-form">
            <Form.Item>
              <MyLabel>{("Email.1")}</MyLabel>
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
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Item>
            <Form.Item>
              <MyLabel>{("Password.1")}</MyLabel>

              <PrimaryInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {/* Check if error show the error message */}
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : null}
            </Form.Item>
            <a className="login-form-forgot ?" to="/reset">
              {("Forget_password.1")}
            </a>
            {/* Here i should send the data to the API*/}
            <PrimaryButton
              className="login-form-button"
              type="submit"
              onClick={()=>handleSubmit()}
            >
              {("Login.2")}
            </PrimaryButton>
            {("Or.1")} <a to="/register">{("Regiester_here.1")}</a>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginForm;

