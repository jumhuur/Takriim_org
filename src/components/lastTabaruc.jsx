"use cleint";
import EmpatyTabaruc from "./EmpatyTabaruc";
import { format } from "timeago.js";
// import Lottie from "lottie-react";
// import animationData from "../../public/Images/123026-celebrations-begin.json";
// async function getTabaruc(Id) {
//   const res1 = await fetch(
//     `https://tabaruc.vercel.app/api/Tabaruc/proTabarucyo/${Id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res1.ok) {
//     throw new Error("NOT FOUND !");
//   }
//   return res1.json();
// }

// async function GetCount(Id) {
//   const res3 = await fetch(
//     `https://tabaruc.vercel.app/api/Tabaruc/countproject/${Id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res3.ok) {
//     throw new Error("NOT FOUND !");
//   }
//   return res3.json();
// }

// async function topDonote(Id) {
//   const response = await fetch(
//     `https://tabaruc.vercel.app/api/Tabaruc/top/${Id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!response.ok) {
//     throw new Error("NOT FOUND !");
//   }
//   return response.json();
// }
const LastTabaruc = ({ tabaruc, TopDonote, Count }) => {
  return (
    <>
      <div className="qayb Pyments">
        <div className="last_donote">
          <h2>
            {" "}
            Tirada dadka Tabarucay <span>({Count}) </span>Qof
          </h2>
          <p>
            <i className="fa-solid fa-trophy"></i> Sadexda Qof Ugu Tabaruc Badan
          </p>
          {TopDonote && TopDonote.length > 0 ? (
            <>
              {TopDonote &&
                TopDonote.map((tab) => (
                  <div className="tabaruc" key={tab._id}>
                    {/* <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                      </div> */}
                    <div className="name_amout" key={tab._id}>
                      <h2>{tab.Name}</h2>
                      <div className="info_wind">
                        <p>
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>{" "}
                          Lacagta {tab.Lacagta} $
                        </p>
                        <p>
                          <i className="fa-solid fa-clock"></i>{" "}
                          {format(tab.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              <EmpatyTabaruc />
            </>
          )}
          <p>
            <i className="fa-solid fa-users"></i> Todobadii qof ee Ugu danbeeyay
          </p>
          {tabaruc && tabaruc.length > 0 ? (
            <>
              {tabaruc &&
                tabaruc.map((tab) => (
                  <div className="tabaruc" key={tab._id}>
                    {/* <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                                </div> */}
                    <div className="name_amout" key={tab._id}>
                      <h2>{tab.Name}</h2>
                      <div className="info_wind">
                        <p>
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>{" "}
                          Lacagta {tab.Lacagta} $
                        </p>
                        <p>
                          <i className="fa-solid fa-clock"></i>{" "}
                          {format(tab.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              <EmpatyTabaruc />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LastTabaruc;
