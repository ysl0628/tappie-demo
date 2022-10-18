import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import usePlan from "../../hooks/usePlan";
import useRWD from "../../hooks/useRWD";
import Modal from "../Modal";
import Plan from "../Plan/Plan";
import "./index.css";

type PropsType = {
  plan: any;
};

export default function Card({ plan }: PropsType) {
  const [modal, setModal] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const device = useRWD();
  const plans = usePlan();

  useEffect(() => {
    if (device === "mobile") {
      setCollapse(false);
      return;
    }
    if (device === "PC") {
      setCollapse(true);
    }
  }, [device]);
  const style = () => {
    switch (plan.type) {
      case "ENTRY":
        return "card-base-entry";
      case "BASIC":
        return "card-base-pro";
      case "BASIC_LIVECHAT":
        return "card-base-pro";
      case "ADVANCE":
        return "card-base-business";
      case "ADVANCE_LIVECHAT":
        return "card-base-business";
      default:
        break;
    }
  };
  const color = () => {
    switch (plan.type) {
      case "ENTRY":
        return "entry-plan";
      case "BASIC":
        return "pro-plan";
      case "BASIC_LIVECHAT":
        return "pro-plan";
      case "ADVANCE":
        return "business-plan";
      case "ADVANCE_LIVECHAT":
        return "business-plan";
      default:
        break;
    }
  };
  const collapseCard = () => {
    switch (plan.type) {
      case "ENTRY":
        return <Plan info={plans.entry} />;
      case "BASIC":
        return <Plan info={plans.business} />;
      case "BASIC_LIVECHAT":
        return <Plan info={plans.business} />;
      case "ADVANCE":
        return <Plan info={plans.pro} />;
      case "ADVANCE_LIVECHAT":
        return <Plan info={plans.pro} />;
      default:
        break;
    }
  };

  return (
    <div className="card">
      <div className={style()}></div>
      <div className={color()}>
        <div className="title">
          <h4>{plan.title}</h4>
        </div>
        <div className="price-board">
          <p>
            <strong>${plan.price}</strong>
            <span>/ 月</span>
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
        {collapse && collapseCard()}
      </div>
    </div>
  );
}
