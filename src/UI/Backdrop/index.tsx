import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

type BackdropProps = {
  children: React.ReactNode;
};

export default function Backdrop(props: BackdropProps) {
  return ReactDOM.createPortal(
    <div className="backdrop">{props.children}</div>,
    document.getElementById("backdrop") as HTMLElement
  );
}
