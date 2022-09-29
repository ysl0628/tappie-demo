import moment from "moment";
import useUser from "../../../hooks/useUser";

type PropsType = {
  remainTime: number;
  deadline: string;
  plan: any;
};

export default function RenewTable({ remainTime, deadline, plan }: PropsType) {
  const userInfo = useUser();
  const expiration = moment(deadline).add(1, "month").format("YYYY-MM-DD");

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
          <td>專業版 PRO</td>
        </tr>
        <tr>
          <th>結帳後, 新約截止日期</th>
          <td>{expiration}</td>
        </tr>
        <tr>
          <th>機器人模式</th>
          <td>
            <select className="mode" name="mode" id="mode">
              <option value="one">商城模式</option>
              <option value="two">導流模式</option>
            </select>
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
            <input type="radio" name="invoice" id="company" />
            <label htmlFor="company">公司</label>
          </td>
        </tr>
        <tr>
          <th>電子發票發送Email</th>
          <td>
            <input className="email" type="text" placeholder={userInfo.email} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
