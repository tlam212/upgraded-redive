import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const SignUpForm = () => {

  const [currentUser, setCurrentUser] = useState(null)


  return (
    <MDBContainer className="formContainer">
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
              name="name"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="form-control"
              name="email"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >

            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
              name="password"

            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >

            </label>
            <input
              type="password"
              id="passwordConf"
              placeholder="Confirm Password"
              className="form-control"
              name="passwordConf"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Submit
              </MDBBtn>
            </div>
          </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


  );
};

export default SignUpForm;
