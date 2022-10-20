import React from "react";
import ReactDOM from "react-dom";
import "./AlertBackdrop.css";

type BackdropProps = {
  children: React.ReactNode;
};

export default function AlertBackdrop(props: BackdropProps) {
  return ReactDOM.createPortal(
    <div className="alertBackdrop">{props.children}</div>,
    document.getElementById("backdrop") as HTMLElement
  );
}
