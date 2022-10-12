import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Plan({ info }: any) {
  return (
    <div className="content">
      <div className="label">
        {info.selector ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>自訂選單</span>
      </div>
      <div className="label">
        {info.notice ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>訂單通知</span>
      </div>
      <div className="label">
        {info.discount ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>產品折扣</span>
      </div>
      <div className="label">
        {!info.dataIO ? (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        ) : (
          <div></div>
        )}
        <span>
          批次資料匯入/出: {info.dataIO && <strong>訂單、商品資料</strong>}
        </span>
      </div>
      <div className="label">
        {info.freeShipping ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>免運設定</span>
      </div>
      <div className="label">
        {!info.logisticsA ? (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        ) : (
          <div></div>
        )}
        <span>
          物流: 實體門店(櫃點)
          {info.logisticsA > 0 && <strong>可設定 {info.logisticsA} 組</strong>}
        </span>
      </div>
      {/*  */}
      <div className="label">
        {info.logisticsB ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>物流: 超商、宅配</span>
      </div>
      <div className="label">
        {!info.paymentFlow ? (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        ) : (
          <div></div>
        )}
        <span>
          金流:<strong>{info.paymentFlow}</strong>
        </span>
      </div>
      <div className="label">
        {info.cart ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>購物車記憶</span>
      </div>
      <div className="label">
        {info.orderSearch ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>訂單查詢</span>
      </div>
      <div className="label">
        {info.widget ? (
          <FontAwesomeIcon icon={faCheck} className={"check"} />
        ) : (
          <FontAwesomeIcon icon={faXmark} className={"none"} />
        )}
        <span>商家聯繫快捷</span>
      </div>
      <div className="label">
        <div></div>
        <span>
          熱銷商品 <strong>{info.hotItems} 個</strong>
        </span>
      </div>
      <div className="label">
        <div></div>
        <span>
          商品分類 <strong>{info.productSort} 組</strong>
        </span>
      </div>
      <div className="label">
        <div></div>
        <span>
          所有商品陳列 <strong>{info.products} 個</strong>
        </span>
      </div>
      <div className="label">
        <div></div>
        <span>
          最新消息 <strong>{info.news[0]} 則</strong> (文字+影片, 推薦商品*{" "}
          <strong>{info.news[1]}</strong>)
        </span>
      </div>
      <div className="label">
        <div></div>
        <span>
          粉絲 <strong>{info.fan}</strong>
        </span>
      </div>
    </div>
  );
}
