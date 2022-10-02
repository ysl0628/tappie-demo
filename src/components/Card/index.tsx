import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useRWD from "../../hooks/useRWD";
import Business from "../Business";
import Modal from "../Modal";
import Pro from "../Pro";

type PropsType = {
  plan: any;
};

export default function Card({ plan }: PropsType) {
  const [modal, setModal] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const device = useRWD();
  useEffect(() => {
    if (device === "mobile") {
      setCollapse(false);
      return;
    }
    if (device === "PC") {
      setCollapse(true);
    }
  }, [device]);
  return (
    <div className="card">
      <div
        className={
          plan.type === "BASIC" || plan.type === "BASIC_LIVECHAT"
            ? "card-base-pro"
            : "card-base-business"
        }
      ></div>
      <div
        className={
          plan.type === "BASIC" || plan.type === "BASIC_LIVECHAT"
            ? "pro-plan"
            : "business-plan"
        }
      >
        <div className="title">
          <h4>{plan.title}</h4>
        </div>
        <div className="price-board">
          <p>
            <span style={{ fontSize: "28px", fontWeight: "bolder" }}>
              ${plan.price}
            </span>
            <span style={{ fontSize: "14px" }}>/ 月</span>
          </p>
          <button onClick={() => setModal(true)}>選擇</button>
          {modal && <Modal plan={plan} setModal={setModal} />}
        </div>
        <div className="collapse">
          <button
            onClick={() => {
              setCollapse((prev) => !prev);
            }}
          >
            方案內容
            {collapse ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>
        {plan.type === "BASIC" || plan.type === "BASIC_LIVECHAT"
          ? collapse && <Pro />
          : collapse && <Business />}
      </div>
    </div>
  );
}
