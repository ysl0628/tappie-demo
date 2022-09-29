import { useEffect, useState } from "react";
import "./App.css";
import useData from "./hooks/useData";
import Entry from "./components/Entry";
import Pro from "./components/Pro";
import Business from "./components/Business";
import Month from "./components/Month";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const { plans, isSuccess, isLoading } = useData();
  const [planIndex, setPlanIndex] = useState(0);
  const [slicePlan, setSlicePlan] = useState<any>();
  const [liveChat, setLiveChat] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    plans && setSlicePlan(plans[planIndex].contents.slice(0, 2).reverse());
    plans &&
      liveChat &&
      setSlicePlan(plans[planIndex].contents.slice(2).reverse());
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
      </div>
      <div className="container">
        {isLoading && <h1>Loading...</h1>}
        {isSuccess && (
          <>
            <Entry />
            {slicePlan?.map((plan: any, index: number) => (
              <Card key={index} plan={plan} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
