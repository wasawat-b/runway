import { Fragment } from "react";
import ReactDom from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("header");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
