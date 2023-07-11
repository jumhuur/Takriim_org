"use client";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import useSWR from "swr";
import Skllast from "./Skeletons/Skllast";
import { Auth } from "@/context/context";
// const GetData = async () => {
//   const res = await fetch(
//     "https://tabaruc.vercel.app/api/Tabaruc/getAll/lastDone",
//     {
//       next: { revalidate: 10 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("not found data");
//   }

//   return res.json();
// };

function Fqa() {
  const [last, setlast] = useState(null);
  const { state } = Auth();
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const {
  //   data: lasnone,
  //   mutate,
  //   error,
  //   isLoading,
  // } = useSWR(`/api/Tabaruc/getAll/lastDone`, fetcher);

  useEffect(() => {
    //mutate();
    setlast(state && state.Data);
  }, [state]);

  // const lasnone = await GetData();
  return (
    <>
      <div className="faq">
        {/* <div className="wave_02">
             </ div> */}
        <div className="haye">
          <div className="suaalo">
            <div className="labaqayb">
              <div className="qayb_suaal">
                <div className="hal_dhinac">
                  <div className="icon_bes">
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <div className="qoraal">
                    <h2>Maxaa loo aasaasay shabakada Taysiir ?</h2>
                    <p>
                      Taysiir waa shabakada samo fal waxaana loo aasasay
                      caawinta dadka baahan si loogu ururiyo mucaawno hab
                      casriya.
                    </p>
                  </div>
                </div>
                <div className="hal_dhinac">
                  <div className="icon_bes">
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <div className="qoraal">
                    <h2>Yaa iska leh Taysiir?</h2>
                    <p>
                      Taysiir waa shabakada ka dhaxaysa bulshada cid gaarna ma
                      laha eg sameeyayna waxa ugu tabarucay in wax loogu qabto
                      dadka bahan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="labaqayb">
              <div className="qayb_suaal">
                <div className="hal_dhinac">
                  <div className="icon_bes">
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <div className="qoraal">
                    <h2>Sidee lagu doortaa dadka bahan?</h2>
                    <p>
                      dadka kala duwan ee mashaariicada looga furayo shabakada
                      Taysiir waxaa lagu doortaa xaaladooda baahiyeed inta ay
                      leegtahay.
                    </p>
                  </div>
                </div>
                <div className="hal_dhinac">
                  <div className="icon_bes">
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                  <div className="qoraal">
                    <h2>Qaybha aan ku bixin karrto tabaruca maxay yihiiin?</h2>
                    <p>
                      tabarucaaga waxaad ku bixin kartaa qaybha kala duwan ee
                      shabakada Taysiir sida caafimaadka , waxabarashada ,
                      cuntada, Hoyga, iyo daryeelka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_start">
              <div className="qoraalo_btn_start">
                <h2>Kamid Noqo dadka u Tartamaya khayrka.</h2>
                <p>
                  Tabarucii ugu danbeeyay ee shabakada dhexdeeda dhaca wax uu
                  ahaa kan hoose .
                </p>
              </div>
              {last ? (
                <button className="start_btn_faq">
                  <i class="fa-solid fa-wallet"></i> {last[0].Lacagta} ${" "}
                  <i class="fa-regular fa-clock"></i>{" "}
                  {format(last[0].createdAt)}
                </button>
              ) : (
                <Skllast />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fqa;
