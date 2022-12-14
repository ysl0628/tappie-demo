import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import usePlan from "../../hooks/usePlan";
import useRWD from "../../hooks/useRWD";
import useUser from "../../hooks/useUser";
import Modal from "../Modal";
import Alert from "../Modal/Alert";
import Plan from "../Plan/Plan";
import "./index.css";

type PropsType = {
  plan: any;
  currentLevel: number;
};

type TypeStyleState = {
  [x: string]: string;
};

export default function Card({ plan, currentLevel }: PropsType) {
  const [modal, setModal] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [typeStyle, setTypeStyle] = useState<TypeStyleState>({});

  const device = useRWD();
  const plans = usePlan();
  const user = useUser();

  useEffect(() => {
    if (device === "mobile") {
      setCollapse(false);
      return;
    }
    if (device === "PC") {
      setCollapse(true);
    }
  }, [device]);

  useEffect(() => {
    let classColor: string;
    let classStyle: string;
    switch (plan.type) {
      case "ENTRY":
        classColor = "entry-plan";
        classStyle = "card-base-entry";
        return setTypeStyle({ color: classColor, style: classStyle });
      case "BASIC":
        classColor = "pro-plan";
        classStyle = "card-base-pro";
        return setTypeStyle({ color: classColor, style: classStyle });
      case "BASIC_LIVECHAT":
        classColor = "pro-plan";
        classStyle = "card-base-pro";
        return setTypeStyle({ color: classColor, style: classStyle });
      case "ADVANCE":
        classColor = "business-plan";
        classStyle = "card-base-business";
        return setTypeStyle({ color: classColor, style: classStyle });
      case "ADVANCE_LIVECHAT":
        classColor = "business-plan";
        classStyle = "card-base-business";
        return setTypeStyle({ color: classColor, style: classStyle });
      default:
        break;
    }
  }, [plan.type]);

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
      <div className={typeStyle.style}></div>
      <div className={typeStyle.color}>
        <div className="title">
          <h4>{plan.title}</h4>
        </div>
        <div className="price-board">
          <p>
            <strong>${plan.price}</strong>
            <span>/ ???</span>
          </p>
          <button onClick={() => setModal(true)}>??????</button>
          {modal &&
            (plan.type === "ENTRY" ? (
              <Alert setModal={setModal} />
            ) : (
              <Modal
                plan={plan}
                setModal={setModal}
                currentLevel={currentLevel as number}
              />
            ))}
        </div>
        <div className="collapse">
          <button
            onClick={() => {
              setCollapse((prev) => !prev);
            }}
          >
            ????????????
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
