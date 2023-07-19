"use client";
import Topinfo from "@/components/Topinfo";
import Provider from "@/components/Provide";
import LastTabaruc from "@/components/lastTabaruc";
import Comming from "@/components/Comming";
import Done from "@/components/Done";
import MenuallyFrom from "@/components/ManuallyFrom";
import { useEffect, useReducer, useState } from "react";
import { ACTIONS, INITIAL_SATATE, lastTabaruc } from "@/Radiuse/Radiuses";
import Loading from "@/components/loading";
import { Auth } from "@/context/context";
import { useRouter } from "next/navigation";

function Menually({ params }) {
  const { User } = Auth();
  const Router = useRouter();
  // const Admins = ["4645195", "4462174", "4115346", "9090098"];
  const salaxiyaat = () => {
    if (
      (User && User.Lanbar === "4645195") ||
      (User && User.Lanbar === "4462174") ||
      (User && User.Lanbar === "4115346") ||
      (User && User.Lanbar === "9090098")
    ) {
      console.log("sax");
    } else {
      Router.push("/");
    }
  };

  salaxiyaat();
  const [state, dispatch] = useReducer(lastTabaruc, INITIAL_SATATE);
  // states
  const [info, setinfo] = useState(null);
  const [lastTotal, setlastTotal] = useState(null);
  const [total, settotal] = useState(null);
  const [tabaruc, settabaruc] = useState(null);
  const [TopDonote, setTopDonote] = useState(null);
  const [Count, setCount] = useState(null);
  const [loading, setloading] = useState(false);

  const { Id } = params;
  const GetProjectDetails = async () => {
    const ProjectInfo = await fetch(`/api/projects/${Id}`, {
      cache: "no-store",
    });

    const res1 = await ProjectInfo.json();

    const Total = await fetch(`/api/Tabaruc/getTotal/${Id}`, {
      cache: "no-store",
    });

    const tabarucyo = await fetch(`/api/Tabaruc/proTabarucyo/${Id}`, {
      cache: "no-store",
    });

    const response1 = await tabarucyo.json();

    const TopDonotes = await fetch(`/api/Tabaruc/countproject/${Id}`, {
      cache: "no-store",
    });

    const response2 = await TopDonotes.json();

    const Totals = await fetch(`/api/Tabaruc/top/${Id}`, {
      cache: "no-store",
    });

    const response3 = await Totals.json();

    const res3 = await Total.json();
    if (ProjectInfo.ok) {
      dispatch({
        type: ACTIONS.GET_DATA,
        Project: res1,
        Total: res3,
        Tabarucyo: response1,
        Count: response2,
        Top: response3,
      });
    }
  };
  const Total = total && total.length > 0 ? total[0].Total : 0;
  useEffect(() => {
    GetProjectDetails();
  }, []);

  useEffect(() => {
    setloading(state.loading);
    setinfo(state.Project);
    settotal(state.Total);
    settabaruc(state && state.Tabarucyo);
    setTopDonote(state && state.Top);
    setCount(state && state.Count);
    // document.title = `Taysiir | ${info && info.Name}`;
  }, [state]);
  return (
    <>
      {Total >= info?.Hadaf && <Done Total={Total} />}
      {info && !info?.Active && <Comming />}
      <Topinfo info={info} />
      <Provider>
        {loading ? (
          <div className="Info">
            <div className="haye">
              <div className="laba_qaybood">
                <div className="qayb muuqaal">
                  {/* <img src={info && info.Sawir} alt="mashruuc_sawir" /> */}
                  {/* {info ? <Video Muuqaal={info.Muuqaal} /> : <></>} */}
                  {/* <div className="macluumaad_bidix">
                    <div className="qoraal">
                      <h2>Macluumaadka Masharuuca</h2>
                      <p>{info && info.Macluumaad}</p>
                    </div>
                  </div> */}
                  <div className="trakoobyo">
                    <div className="tiro">
                      <div className="lahayo">
                        <div className="icon">
                          <i className="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="qoraal">
                          <p>${info && Number(Total).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="lahayo">
                        <div className="icon">
                          <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="qoraal">
                          <p>${info && info.Hadaf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {info ? (
                    <div className="progress">
                      <span
                        style={
                          Total >= info?.Hadaf
                            ? {
                                width: `100%`,
                              }
                            : {
                                width: `${(Total / info.Hadaf) * 100 + 5}%`,
                              }
                        }
                      >
                        <span>
                          {Math.floor(
                            (Number(Total) / info.Hadaf) * 100
                          ).toFixed(0)}
                          %
                        </span>
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                  {Total >= info?.Hadaf ? (
                    <>
                      <h2 className="comm done">
                        Mahadsanidiin deqsinimadiina ayuu mashruucan ku
                        dhamaaday
                        <span> {Total}$</span> Ayaad Ku deeqdeen !
                      </h2>
                    </>
                  ) : (
                    <MenuallyFrom
                      info={info}
                      Id={Id}
                      Total={Total}
                      GetProjectDetails={GetProjectDetails}
                    />
                  )}
                </div>
                <LastTabaruc
                  Count={Count}
                  tabaruc={tabaruc}
                  TopDonote={TopDonote}
                />
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </Provider>
    </>
  );
}

export default Menually;
