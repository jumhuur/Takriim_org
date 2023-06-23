import Lottie from "lottie-react";
import animationData from "../../public/Images/104785-done";
function AlertSax({ Sax }) {
  return (
    <>
      <div className={"over_alert active"}>
        <div className="haye">
          <div className="in_haye_alert">
            <div className="alert">
              <div className="load_qoraal">
                <div className="load">
                  <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                  </div>
                </div>
                <div className="qoraal">
                  <h2>{Sax}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AlertSax;
