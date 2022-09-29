import React from "react";

type PropType = {
  plan: {
    month: number;
    contents: [
      {
        title: string;
        type: string;
        price: number;
      }
    ];
  };
  setPlanIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

export default function Month({ plan, setPlanIndex, index }: PropType) {
  return (
    <>
      <input
        type="radio"
        name="monthChoose"
        id={`month${plan.month}`}
        onClick={() => setPlanIndex(index)}
        defaultChecked={index === 0}
      />
      <label htmlFor={`month${plan.month}`}>{plan.month} 個月</label>
      <span>|</span>
    </>
  );
}
