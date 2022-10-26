import { useEffect, useMemo, useState } from "react";
import "./App.css";
import useData from "./hooks/useData";
import Month from "./components/Month";
import Card from "./components/Card";
import useRWD from "./hooks/useRWD";
import PlanSelect from "./components/PlanSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import useUser from "./hooks/useUser";

type PlanType = { title: string; type: string; price: number };

function App() {
  const { plans, isSuccess, isLoading } = useData();
  const [planIndex, setPlanIndex] = useState(0);
  const [planType, setPlanType] = useState<string | number>("ALL");
  const [slicePlan, setSlicePlan] = useState<any>();
  const [liveChatPlan, setLiveChatPlan] = useState<any>();
  const [liveChat, setLiveChat] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<Number>();

  const device = useRWD();
  const user = useUser();

  const planSort = (a: PlanType, b: PlanType) => (a.type > b.type ? -1 : 1);

  useEffect(() => {
    plans &&
      plans[0].contents.find((content) => {
        if (content.type === user.currentType) {
          setCurrentLevel(content.level);
          return true;
        }
        return false;
      });
  }, [plans, user.currentType]);

  useEffect(() => {
    plans &&
      setSlicePlan(
        plans[planIndex].contents
          .filter(
            (plan) =>
              plan.type === "ENTRY" ||
              plan.type === "BASIC" ||
              plan.type === "ADVANCE"
          )
          .sort(planSort)
      );
    plans &&
      liveChat &&
      setLiveChatPlan(
        plans[planIndex].contents
          .filter(
            (plan) =>
              plan.type === "ENTRY" ||
              plan.type === "BASIC_LIVECHAT" ||
              plan.type === "ADVANCE_LIVECHAT"
          )
          .sort(planSort)
      );
  }, [liveChat, planIndex, plans]);

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <p>請選擇一次付清月份數</p>
        </div>
        <div className="month">
          {plans?.map((plan, index) => (
            <Month
              key={index}
              plan={plan}
              setPlanIndex={setPlanIndex}
              index={index}
              planIndex={planIndex}
            />
          ))}
        </div>
        <div className="live-chat-title">
          <p>啟用 LIVE CHAT 方案</p>
        </div>
        <div className="live-chat-switch">
          <input
            type="checkbox"
            name="switch"
            id="switch"
            onChange={() => setLiveChat((prev) => !prev)}
          />
          <label htmlFor="switch">
            <span className="switch-txt"></span>
          </label>
        </div>
        {device === "mobile" && (
          <>
            <div className="rwd-plan-title">
              <p>方案選擇</p>
            </div>
            <div className="rwd-plan">
              {planType === "ALL" ? <FontAwesomeIcon icon={faRobot} /> : null}
              <div className="all">
                <input
                  type="radio"
                  name="planSelect"
                  id={`planAll`}
                  defaultChecked
                  onClick={() => setPlanType("ALL")}
                />
                <label htmlFor={`planAll`}>全部</label>
                <span>|</span>
              </div>
              {liveChat
                ? liveChatPlan?.map((plan: any, index: number) => (
                    <PlanSelect
                      key={index}
                      plan={plan}
                      setPlanType={setPlanType}
                      index={index}
                      planType={planType}
                    />
                  ))
                : slicePlan?.map((plan: any, index: number) => (
                    <PlanSelect
                      key={index}
                      plan={plan}
                      setPlanType={setPlanType}
                      index={index}
                      planType={planType}
                    />
                  ))}
            </div>
          </>
        )}
      </div>
      <div className="container">
        {isLoading && <h1>Loading...</h1>}
        {isSuccess && device === "mobile" && (
          <>
            {planType === "ALL" &&
              (liveChat
                ? liveChatPlan?.map((plan: any, index: number) => (
                    <Card
                      key={index}
                      plan={plan}
                      currentLevel={currentLevel as number}
                    />
                  ))
                : slicePlan?.map((plan: any, index: number) => (
                    <Card
                      key={index}
                      plan={plan}
                      currentLevel={currentLevel as number}
                    />
                  )))}
            {planType !== "ALL" &&
              (liveChat && liveChatPlan ? (
                <Card
                  plan={liveChatPlan[planType || 0]}
                  currentLevel={currentLevel as number}
                />
              ) : (
                <Card
                  plan={slicePlan[planType || 0]}
                  currentLevel={currentLevel as number}
                />
              ))}
          </>
        )}
        {isSuccess &&
          device === "PC" &&
          (liveChat
            ? liveChatPlan?.map((plan: any, index: number) => (
                <Card
                  key={index}
                  plan={plan}
                  currentLevel={currentLevel as number}
                />
              ))
            : slicePlan?.map((plan: any, index: number) => (
                <Card
                  key={index}
                  plan={plan}
                  currentLevel={currentLevel as number}
                />
              )))}
      </div>
    </div>
  );
}

export default App;
