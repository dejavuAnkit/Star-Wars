import React from "react";
import * as Modal from "./style.css";

export const ModalComponent = (props) => {
  const { errMessage } = props;

  return (
    <div className="dialog">
      <div className="inner_dialog_Wrapper">
        <div className="dialog_body">{errMessage}</div>
      </div>
    </div>
  );
};
