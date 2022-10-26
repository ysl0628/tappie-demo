import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://dev.shopbot.tw/api/shopbot/plans");
  return res.json();
};
export type PlanType = [
  {
    month: number;
    contents: [
      {
        title: string;
        type: string;
        price: number;
        level?: number;
      }
    ];
  }
];

type TypeLevel = {
  [x: string]: number;
};

const defaultContents = {
  title: "入門版 ENTRY",
  type: "ENTRY",
  price: 0,
  level: 1,
};

const contentTypeLevelList: TypeLevel = {
  ADVANCE_LIVECHAT: 20,
  BASIC_LIVECHAT: 10,
  ADVANCE: 20,
  BASIC: 10,
};

export default function useData() {
  const [plans, setPlans] = useState<PlanType>();
  const { data, isSuccess, isLoading } = useQuery("type", fetchData);
  useEffect(() => {
    if (!isSuccess) return;
    let plans = data[0].prices.map(({ price, ...keep }: any) => ({
      ...keep,
      contents: [],
    }));
    data.forEach((item: any) => {
      plans.forEach((month: any, index: any) => {
        item.prices.forEach((price: any) => {
          if (price.month === month.month) {
            plans[index].contents.push({
              title: item.title,
              type: item.type,
              price: price.price,
              level: null,
            });
          }
        });
      });
    });

    setPlans(plans);
  }, [data, isSuccess]);

  useEffect(() => {
    plans?.forEach((plan) => plan.contents.push(defaultContents));
  }, [plans]);

  useEffect(() => {
    plans?.forEach((plan, index) => {
      plan.contents.forEach((content) => {
        if (contentTypeLevelList[content.type]) {
          content.level = contentTypeLevelList[content.type];
          return;
        }
        content.level = 1;
      });
    });
    setPlans(plans);
  }, [plans]);

  return { plans, isSuccess, isLoading };
}
