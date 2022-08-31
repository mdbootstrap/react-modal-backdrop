import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function NoBackdrop() {
  const [noBackdropModal, setNoBackdropModal] = useState(false);

  const toggleShow = () => setNoBackdropModal(!noBackdropModal);

  return (
    <MDBContainer className="p-5">
      <MDBBtn onClick={toggleShow}>Launch static backdrop modal</MDBBtn>

      <MDBModal
        backdrop={false}
        tabIndex="-1"
        show={noBackdropModal}
        setShow={setNoBackdropModal}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Understood</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}
