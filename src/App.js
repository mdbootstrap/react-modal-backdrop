import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Static">
        <MDBBtn className="ms-3 mt-3">Static</MDBBtn>
      </Link>
      <Link to="/NoBackdrop">
        <MDBBtn className="ms-3 mt-3">No Backdrop</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
