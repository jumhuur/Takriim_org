import { format } from "timeago.js";
async function Topinfo({ info }) {
  return (
    <>
      {info ? (
        <div className="well">
          <div className="haye">
            <div className="macluumaad">
              <h2>{info && info.Name} </h2>
              <div className="ashyaa">
                <div className="qayb">
                  <p className="lcg asal">
                    <i className="fa-solid fa-calendar-days"></i>{" "}
                    {info && format(info.createdAt)}
                  </p>
                </div>
                <div className="qayb">
                  <p className="lcg asal">
                    <i className="fa-solid fa-layer-group"></i>{" "}
                    {info && info.Qayb}
                  </p>
                </div>
                {/* <div className="qayb">
                  <p className="lcg asal">
                    <i className="fa-solid fa-users"></i> {Total} Qof
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="well">
            <div className="haye">
              <div className="macluumaad">
                <h2>{info && info.Name} </h2>
                <div className="ashyaa">
                  <div className="qayb">
                    <p className="lcg asal">
                      <div class="sk-circle">
                        <div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>
                      </div>{" "}
                      Fadlan wax yar sug ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Topinfo;
