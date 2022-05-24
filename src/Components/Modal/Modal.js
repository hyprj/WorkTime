import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import classes from "./modal.module.scss";

export const Modal = ({ data, children, open, onClose }) => {
  console.log(data);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return createPortal(
    <div className={classes.modal_overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modal_close}>
          <i
            className={`fa-solid fa-xmark ${classes.modal_closeBtn}`}
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#portal")
  );
};
