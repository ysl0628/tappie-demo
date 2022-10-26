import "./index.css";

const LevelAlert = ({ plan }: any) => {
  return (
    <div>
      <div className="alert-title">
        目前為 <strong>企業版</strong>，欲選購 <strong>{plan.title}</strong>
        ，請聯繫我們，我們將即刻開始協助您。
      </div>
      <div className="alert-content">
        <div className="qr-code">
          <div className="line">
            <div className="image">
              <img src="https://home.tappie.tw/line_qrcode.jpg" alt="" />
            </div>
            <p>LINE專人客服</p>
          </div>
          <div className="facebook">
            <div className="image">
              <img src="https://home.tappie.tw/fb_qrcode.jpg" alt="" />
            </div>
            <p>Facebook小編</p>
          </div>
        </div>
        <div className="contract">
          <div>
            Email: <a href="tappie.team@gmail.com">tappie.team@gmail.com</a>
          </div>
          <div>
            來電聯繫: <a href="tel:02-2563-0013">02-2563-0013</a>
          </div>
          <div>上班時間: 平日9:00-22:00</div>
        </div>
      </div>
    </div>
  );
};

export default LevelAlert;

/* {
  <table>
          <tbody>
            <tr style={{ border: "1px solid #000000" }}>
              <td
                rowSpan={3}
                style={{
                  width: "25%",
                  padding: "10px",
                  border: "1px solid #000000",
                }}
              >
                <img src="https://home.tappie.tw/line_qrcode.jpg" alt="" />
              </td>
              <td rowSpan={3} style={{ width: "25%", padding: "10px" }}>
                <img src="https://home.tappie.tw/fb_qrcode.jpg" alt="" />
              </td>
              <td style={{ border: "1px solid #000000" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000000" }}>
                Email: <a href="tappie.team@gmail.com">tappie.team@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000000" }}>
                來電聯繫: <a href="tel:02-2563-0013">02-2563-0013</a>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>LINE專人客服</td>
              <td style={{ textAlign: "center" }}>Facebook小編</td>
              <td>上班時間: 平日9:00-22:00</td>
            </tr>
          </tbody>
        </table>
} */
