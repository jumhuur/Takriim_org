// async function getData() {
//   const res = await fetch("http://127.0.0.1:3000/api/users/coutusers", {
//     cache: "no-cache",
//   });

//   if (!res.ok) {
//     throw new Error("qalad ayaa jira !");
//   }

//   return res.json();
// }

// const GetTotalTabaruce = async () => {
//   const data = await fetch(
//     "http://127.0.0.1:3000/api/Tabaruc/getTotal/Total",
//     {
//       cache: "no-cache",
//     }
//   );

//   if (!data.ok) {
//     throw new Error("qalad ayaa jira !");
//   }
//   return data.json();
// };

// const GetDeeqbixye_count = async () => {
//   const res = await fetch(
//     "http://127.0.0.1:3000/api/Tabaruc/getAll/Count",
//     {
//       cache: "no-cache",
//     }
//   );
//   if (!res.ok) {
//     throw new Error("not found");
//   }
//   return res.json();
// };
"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Tirakoob_skl from "./Skeletons/Tirakoob";
function TiroKoobyo() {
  const [Count, setCount] = useState(null);
  const [TotalTabaruc, setTotalTabaruc] = useState(null);
  const [countTabaruc, setcountTabaruc] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: CountUser, mutate: mutate1 } = useSWR(
    `http://127.0.0.1:3000/api/users/coutusers`,
    fetcher
  );
  const { data: GetTotalTabaruce, mutate: mutate2 } = useSWR(
    `http://127.0.0.1:3000/api/Tabaruc/getTotal/Total`,
    fetcher
  );
  const { data: GetDeeqbixye_count, mutate: mutate3 } = useSWR(
    `http://127.0.0.1:3000/api/Tabaruc/getAll/Count`,
    fetcher
  );
  // const Count = await getData();
  // const TotalTabaruc = await GetTotalTabaruce();
  // const countTabaruc = await GetDeeqbixye_count();

  useEffect(() => {
    mutate1();
    mutate2();
    mutate3();
    setCount(CountUser && CountUser);
    setTotalTabaruc(GetTotalTabaruce && GetTotalTabaruce);
    setcountTabaruc(GetDeeqbixye_count && GetDeeqbixye_count);
  }, [
    CountUser,
    GetDeeqbixye_count,
    GetTotalTabaruce,
    mutate1,
    mutate2,
    mutate3,
  ]);
  return (
    <section className="tirokoobyo">
      <div className="haye">
        <div className="cards_tirokoob">
          <div className="card Mashruucyo">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
                    fill="#335EEA"
                  ></path>
                  <path
                    d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
                    fill="#335EEA"
                    opacity=".3"
                  ></path>
                </g>
              </svg>
            </div>
            {TotalTabaruc ? (
              <div className="qoraal">
                <h2>
                  <i className="fa-solid fa-sack-dollar"></i> {TotalTabaruc}{" "}
                  <span className="Tirokoob_titels">$ Dollar</span>
                </h2>
                <p>
                  Tabruca sanadlaha ah ee ee shabakada Taysiir waxa uu gaadhay
                  halkii ugu saraysay sanakada 2023.
                </p>
              </div>
            ) : (
              <Tirakoob_skl />
            )}
          </div>
          <div className="card lacag">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
                    fill="#335EEA"
                  ></path>
                  <path
                    d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z"
                    fill="#335EEA"
                    opacity=".3"
                  ></path>
                </g>
              </svg>
            </div>
            {countTabaruc ? (
              <div className="qoraal">
                <h2>
                  <i className="fa-solid fa-hand-holding-heart"></i>{" "}
                  {countTabaruc}{" "}
                  <span className="Tirokoob_titels">Deeq Bixiye</span>
                </h2>
                <p>
                  Tirada guud ee dadka Tabarucyadooda ku bixiyay shabakada
                  Taysiir intii ay shaqaynaysay
                </p>
              </div>
            ) : (
              <Tirakoob_skl />
            )}
          </div>
          <div className="card dad">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                    fill="#335EEA"
                  ></path>
                  <rect
                    fill="#335EEA"
                    opacity=".3"
                    transform="rotate(15 12 12)"
                    x="11"
                    y="4"
                    width="2"
                    height="16"
                    rx="1"
                  ></rect>
                </g>
              </svg>
            </div>
            {Count ? (
              <div className="qoraal">
                <h2>
                  <i className="fa-solid fa-users"></i> {Count}{" "}
                  <span className="Tirokoob_titels">Isticmaale</span>
                </h2>
                <p>
                  isticmaalayaasha shabakada Taysiir si rasmiya akoon ugu leh
                  wax ku dhawyahay 8 kun qof sanadkan 2023.
                </p>
              </div>
            ) : (
              <Tirakoob_skl />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TiroKoobyo;
