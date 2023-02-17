
import React, { Component  , useState} from 'react'
import {Modal,Button} from "react-bootstrap"

export default function RecommandationCard(props) {
  const { name, company, designation, message } = props.recommendation;
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div
      className="col-12 col-md-4 py-5"
      style={{ padding: "1rem" }}
      onClick={handleShow}
    >
      <div className="card shadow h-300" style={{ padding: "1rem" }}>
        <h4 className="card-text">{message.slice(0,25)}...</h4>
        <p className="card-text text-secondary mb-0">{name}</p>
        <p className="card-text text-secondary">
          {designation} at {company}{" "}
        </p>
      </div>

     
    </div>
    <Modal show={showModal} onHide={handleClose}>

        <Modal.Header closeButton > 

          <Modal.Title>{name}</Modal.Title>
         

          <span className='text-secondary'>( {designation} at {company}{" "} )</span>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}
