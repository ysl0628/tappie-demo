import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type PropType = {
  plan: {
    title: string;
    type: string;
    price: number;
  };
  setPlanType: React.Dispatch<React.SetStateAction<string | number>>;
  index: number;
  planType?: string | number;
};

export default function PlanSelect({
  plan,
  setPlanType,
  index,
  planType,
}: PropType) {
  console.log(plan);

  return (
    <div className={plan.type}>
      {planType === index ? (
        <FontAwesomeIcon
          icon={faRobot}
          style={{ color: "yellow", marginRight: "0.5rem" }}
        />
      ) : null}
      <input
        type="radio"
        name="planSelect"
        id={`plan${plan.type}`}
        onClick={() => setPlanType(index)}
      />
      <label htmlFor={`plan${plan.type}`}>{plan.title}</label>
      <span>|</span>
    </div>
  );
}
