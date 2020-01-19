import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const LoginForm = () => {
  return (
    <MDBContainer className="formContainer">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
          <form>
            <p className="h4 text-center mb-4">Log in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              placeholder="Email"
              className="form-control"
              name="email"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              placeholder="Password"
              className="form-control"
              name="password"
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">Login</MDBBtn>
            </div>
          </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
