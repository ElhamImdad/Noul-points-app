import React, { Fragment, useContext, useState } from "react";
import { Form } from "antd";
import { MyLabel } from "../global-styled-components/Labels";
import { PrimaryInput } from "../global-styled-components/Inputs";
import { PrimaryButton } from "../global-styled-components/Buttons";
import { Formik } from "formik";
import { string, object } from 'yup';
import { Link } from "react-router-dom";

const LoginForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

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

  return (
    <Fragment>
      <Formik
        initialValues={user}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values)
          setSubmitting(true);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
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
              onClick={() => handleSubmit()}
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
