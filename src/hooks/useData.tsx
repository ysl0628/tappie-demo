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

// const data = [
//   {
//     month: 1,
//     contents: [
//       {
//         title: "basic",
//         type: "basic",
//         price: 100,
//       },
//     ],
//   },
// ];

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
    plans?.forEach((plan) => {
      plan.contents.push({
        title: "入門版 ENTRY",
        type: "ENTRY",
        price: 0,
        level: 1,
      });
    });
  }, [plans]);

  useEffect(() => {
    plans?.forEach((plan, index) => {
      plan.contents.forEach((content) => {
        switch (content.type) {
          case "ADVANCE_LIVECHAT":
            return (content.level = 200);
          case "BASIC_LIVECHAT":
            return (content.level = 100);
          case "ADVANCE":
            return (content.level = 20);
          case "BASIC":
            return (content.level = 10);

          default:
            return (content.level = 1);
        }
      });
    });
    setPlans(plans);
  }, [plans]);

  return { plans, isSuccess, isLoading };
}
