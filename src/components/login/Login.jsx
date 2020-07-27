import React from "react";
import { Row, Col } from "antd";
import "./Login.style.scss";
import logoLight from "../../assets/noul-light.png";
import logoSmile from "../../assets/noul-smile-logo.svg";

import LoginForm from "./Login-Form";

function Login() {

  const handleLogin = () => {
    let path = `/`;
    window.location.href = path;
  };
  return (
    <section>
      <title>Login | Title</title>
      <Row style={{ minHeight: "100vh" }}>
        <Col xl={12} lg={11} md={24} style={{ width: "100%" }}>
          <a href="https://noul.net/">
            <img className="smile-header" src={logoSmile} />
          </a>
          <span
            style={{
              float:"right",
            }}

            onClick={() => console.log("Change language")}
          >
            <span className="user-dropdown">{("ActiveLanguage.name")}</span>
          </span>

          <div style={{ padding: "4em 4em 0 4em" }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {("WelcomeTo.1")}{" "}
              <abbr className="text-color-primary">{("Noul.1")}</abbr>
            </h2>
            <h3 className="centered">{("Login.3")}</h3>
            <LoginForm />
          </div>
        </Col>

        <Col
          xl={12}
          lg={24 - 11}
          md={0}
          sm={0}
          xs={0}
          style={{
            backgroundColor: "#9c54d9",
            backgroundImage:
              "linear-gradien(147deg, #9c54d9 0%, #7c6db5 100%)",
            paddingTop: "16em",
          }}
        >
          <img
            src={logoLight}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBlockStart: "auto",
              display: "block",
              width: "200px",
              opacity: "92%",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}

export default Login;
