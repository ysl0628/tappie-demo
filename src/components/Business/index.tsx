import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Business() {
  return (
    <div className="content">
      <table>
        <tbody>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>自訂選單</td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>訂單通知</td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>產品折扣</td>
          </tr>
          <tr>
            <th></th>
            <td>
              批次資料匯入/出: <span>訂單、商品資料</span>
            </td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>免運設定</td>
          </tr>
          <tr>
            <th></th>
            <td>
              物流: 實體門店(櫃點)<span>可設定 9 組</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>物流: 超商、宅配</td>
          </tr>
          <tr>
            <th></th>
            <td>
              金流: <span>ATM、綠界、藍新、tdNEPAY</span>
            </td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>購物車記憶</td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>訂單查詢</td>
          </tr>
          <tr>
            <th>
              <FontAwesomeIcon icon={faCheck} className={"check"} />
            </th>
            <td>商家聯繫快捷</td>
          </tr>
          <tr>
            <th></th>
            <td>
              熱銷商品 <span>10 個</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              商品分類 <span>8 組</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              所有商品陳列 <span>160 個</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              最新消息<span> 15 則</span> (文字+影片, 推薦商品* <span>3</span>)
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              粉絲<span>無上限</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
