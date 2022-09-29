import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useRWD from "../../hooks/useRWD";
import "./index.css";

export default function Entry() {
  const [collapse, setCollapse] = useState(true);
  const device = useRWD();
  useEffect(() => {
    if (device === "mobile") {
      setCollapse(false);
      return;
    }
    if (device === "PC") {
      setCollapse(true);
    }
  }, [device]);

  return (
    <div className="card">
      <div className="card-base-entry"></div>
      <div className="entry-plan">
        <div className="title">
          <h4>入門版 ENTRY</h4>
        </div>
        <div className="price-board">
          <div>
            <span style={{ fontSize: "28px", fontWeight: "bolder" }}>$0</span>
            <span style={{ fontSize: "14px" }}>/ 月</span>
          </div>
          <div>
            <button>選擇</button>
          </div>
        </div>
        <div className="collapse">
          <button
            onClick={() => {
              setCollapse((prev) => !prev);
            }}
          >
            方案內容
            {collapse ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ marginLeft: "5px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "5px" }}
              />
            )}
          </button>
        </div>
        {collapse && (
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
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>訂單通知</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>產品折扣</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>批次資料匯入/出</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>免運設定</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>物流: 實體門店(櫃點)</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>物流: 超商、宅配</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>金流</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>購物車記憶</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faXmark} className={"none"} />
                  </th>
                  <td>訂單查詢</td>
                </tr>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faCheck} className={"none"} />
                  </th>
                  <td>商家聯繫快捷</td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    熱銷商品 <span>1 個</span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    商品分類 <span>2 組</span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    所有商品陳列 <span>5 個</span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    最新消息<span> 2 則</span> (文字+影片, 推薦商品*{" "}
                    <span>0</span>)
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
        )}
      </div>
    </div>
  );
}
