import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import Selector from "../Selector";
import Backdrop from "../../../UI/Backdrop";
import AlertBackdrop from "../../../UI/Backdrop/AlertBackdrop";

// type PropsType = {
//   remainTime: number;
//   deadline: string;
//   plan: any;
// };
type AlertProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Alert({ setModal }: AlertProps) {
  const userInfo = useUser();
  // const expiration = moment(deadline).add(1, "month").format("YYYY-MM-DD");
  const [company, setCompany] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 4000);
  }, [setModal]);

  return (
    <AlertBackdrop>
      <div className="modal-background" onClick={() => setModal(false)}>
        <div className="alert-container">
          <div className="alert">
            <FontAwesomeIcon icon={faCircleXmark} />
            <p>無法計算金額，請洽管理員</p>
          </div>
        </div>
      </div>
    </AlertBackdrop>
  );
}
