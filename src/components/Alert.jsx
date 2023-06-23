"use client";
import { useState } from "react";
import Lottie from "lottie-react";
function Alert({ msg, img, cln }) {
  const [active, setactive] = useState(true);
  const close = () => {
    setactive(!active);
  };

  return (
    <>
      <div className={active ? "over_alert active" : "over_alert"}>
        <div className="haye">
          <div className="in_haye_alert">
            <div className="alert">
              <div className="load_qoraal">
                <div className={`load ${cln}`}>
                  {/* <i className="fa-solid fa-ban fa-beat"></i> */}
                  {/* <i className={img}></i> */}
                  <Lottie animationData={img} />
                  {/* <img src="/Images/warning.png" alt="qalad" /> */}
                </div>
                <div className="qoraal">
                  <h2 className={cln}>{msg}</h2>
                </div>
                <button onClick={close}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Alert;
