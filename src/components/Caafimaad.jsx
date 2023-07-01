import Empaty from "./Empaty";
import { format } from "timeago.js";
// import { Auth } from "../context/Auth";
import ProjectSkl from "./Skeletons/ProjectSkeleton";
import Image from "next/image";
import Link from "next/link";
async function getData() {
  const res = await fetch("http://localhost:3000/api/projects/getall", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Wax macluumaada lama hellin !");
  }

  return res.json();
}
const Caafimaad = async () => {
  const data = await getData();
  return (
    <>
      {data && data.length > 0 ? (
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
      ) : !loading ? (
        <>{ProjectSkl && [1, 2, 3].map((elm) => <ProjectSkl key={elm} />)}</>
      ) : (
        // <p className='Loading'>Fadlan Yara Sug ...</p>
        <Empaty />
      )}
    </>
  );
};

export default Caafimaad;
