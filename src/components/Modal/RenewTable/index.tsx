import moment from "moment";
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import Selector from "../Selector";

type PropsType = {
  remainTime: number;
  deadline: string;
  plan: any;
};

export default function RenewTable({ remainTime, deadline, plan }: PropsType) {
  const userInfo = useUser();
  const expiration = moment(deadline).add(1, "month").format("YYYY-MM-DD");
  const [company, setCompany] = useState(false);

  return (
    <table>
      <tbody>
        <tr>
          <th>目前版本</th>
          <td>{userInfo.currentPlan}</td>
        </tr>
        <tr>
          <th>合約終止</th>
          <td>{deadline}</td>
        </tr>
        <tr>
          <th>剩餘天數</th>
          <td>{remainTime} 天</td>
        </tr>
        <tr>
          <th>續約版本</th>
          <td>{userInfo.currentPlan}</td>
        </tr>
        <tr>
          <th>總費用</th>
          <td>
            <b>{plan.price}</b>
          </td>
        </tr>
        <tr>
          <th>結帳後, 新約截止日期</th>
          <td>{expiration}</td>
        </tr>
        <tr>
          <th>機器人模式</th>
          <td>
            <Selector />
          </td>
        </tr>
        <tr>
          <th>付款方式</th>
          <td>
            <input type="radio" name="payment" id="atm" defaultChecked />
            <label htmlFor="atm">ATM</label>
            <input type="radio" name="payment" id="credit-card" />
            <label htmlFor="credit-card">信用卡</label>
          </td>
        </tr>
        <tr>
          <th>電子發票</th>
          <td>
            <input type="radio" name="invoice" id="personal" defaultChecked />
            <label htmlFor="personal">個人</label>
            <input
              type="radio"
              name="invoice"
              id="company"
              onClick={() => setCompany(true)}
            />
            <label htmlFor="company">公司</label>
          </td>
        </tr>
        <tr>
          <th>電子發票發送Email</th>
          <td>
            <input className="email" type="text" placeholder={userInfo.email} />
          </td>
        </tr>
        {company && (
          <>
            <tr>
              <th>統一編號</th>
              <td>
                <input
                  className="email"
                  type="text"
                  placeholder="統一編號 (8碼)"
                />
              </td>
            </tr>
            <tr>
              <th>公司地址</th>
              <td>
                <input className="email" type="text" placeholder="公司地址" />
              </td>
            </tr>
            <tr>
              <th>公司名稱</th>
              <td>
                <input className="email" type="text" placeholder="公司名稱" />
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
