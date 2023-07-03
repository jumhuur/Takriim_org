"use client";
import Empaty from "./Empaty";
import { format } from "timeago.js";
import useSWR from "swr";
// import { Auth } from "../context/Auth";
import ProjectSkl from "./Skeletons/ProjectSkeleton";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// async function getData() {
//   const res = await fetch("http://localhost:3000/api/projects/getall", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Wax macluumaada lama hellin !");
//   }

//   return res.json();
// }
const Caafimaad = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(`/api/projects/getall`, fetcher);
  //const data = await getData();

  useEffect(() => {
    mutate();
  }, [mutate]);
  return (
    <>
      {data && data ? (
        <>
          {data &&
            data.map((card) => (
              <div className="card_mashruuc" key={card._id}>
                <div className="img_or_vid">
                  <Image fill={true} src={card.Sawir} alt="xaalad" />
                  <div className="over_verlow_video">
                    <div className="lacagta">
                      <div className="hadaf_and_asal">
                        <p className="lcg asal">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          {format(card.createdAt)}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  <h2>{card.Name.slice(0, 30)}</h2>
                  <p>{card.Macluumaad.slice(0, 57)}...</p>
                </div>
                <div className="progress">
                  <span
                    style={{ width: `${(card.Tabaruc / card.Hadaf) * 100}%` }}
                  >
                    <span>
                      {Math.floor((card.Tabaruc / card.Hadaf) * 100).toFixed(0)}
                      %
                    </span>
                  </span>
                </div>
                <div className="lacagta">
                  <div className="hadaf_and_asal">
                    <div className="Hadaf">
                      <p className="lcg asal">
                        <i className="fa-solid fa-sack-dollar"></i> $
                        {Number(card.Tabaruc).toFixed(2)}{" "}
                      </p>
                    </div>
                    <div className="Asal">
                      <p className="lcg asal">
                        <i className="fa-solid fa-circle-check"></i> $
                        {card.Hadaf}
                      </p>
                    </div>
                  </div>
                  <div className="btn_tabaruc">
                    <button className="Daawo">
                      <Link href={`mashruuc/${card._id}`}>
                        <span>
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>{" "}
                          Tabaruc Hada
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
                {/* // halkan  */}
              </div>
            ))}
        </>
      ) : !isLoading ? (
        <>{ProjectSkl && [1, 2, 3].map((elm) => <ProjectSkl key={elm} />)}</>
      ) : (
        // <p className='Loading'>Fadlan Yara Sug ...</p>
        <>{ProjectSkl && [1, 2, 3].map((elm) => <ProjectSkl key={elm} />)}</>
      )}
    </>
  );
};

export default Caafimaad;
