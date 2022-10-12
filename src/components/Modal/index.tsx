import moment from "moment";
import React from "react";
import useUser from "../../hooks/useUser";
import Backdrop from "../../UI/Backdrop";
import "./index.css";
import RenewTable from "./RenewTable";
import UpdateTable from "./UpdateTable";
type PropsType = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  plan: any;
};

export default function Modal({ setModal, plan }: PropsType) {
  const userInfo = useUser();
  const deadline = moment(userInfo.subDate).add(30, "days");
  const deadlineFormat = deadline.format("YYYY-MM-DD");
  const now = moment();
  let remainTime = deadline.diff(now, "days");

  return (
    <Backdrop>
      <div
        className="modal-background"
        onClick={() => setModal((prev) => !prev)}
      >
        <div className="wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="close">
            <button onClick={() => setModal((prev) => !prev)}>X</button>
          </div>
          {plan.type === "ENTRY" ? null : (
            <div className="form">
              <form action="">
                {userInfo.currentType === plan.type ? (
                  <RenewTable
                    remainTime={remainTime}
                    deadline={deadlineFormat}
                    plan={plan}
                  />
                ) : (
                  <UpdateTable
                    remainTime={remainTime}
                    deadline={deadlineFormat}
                    plan={plan}
                  />
                )}
              </form>
            </div>
          )}
          <div className="notice">
            {plan.type === "ENTRY" ? (
              <p>無法計算金額，請洽管理員</p>
            ) : (
              <p>系統確認付款完成後，電子發票將會寄至： {userInfo.email}</p>
            )}
          </div>
          <br />
          <div className="button">
            <button onClick={() => setModal((prev) => !prev)}>Cancel</button>
            <button type="submit">OK</button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
