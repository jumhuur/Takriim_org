import EmpatyTabaruc from "./EmpatyTabaruc";
import { format } from "timeago.js";
async function getTabaruc(Id) {
  const res1 = await fetch(
    `https://tabaruc.vercel.app/api/Tabaruc/proTabarucyo/${Id}`,
    {
      cache: "no-store",
    }
  );

  if (!res1.ok) {
    throw new Error("NOT FOUND !");
  }

  return res1.json();
}

async function GetCount(Id) {
  const res3 = await fetch(
    `https://tabaruc.vercel.app/api/Tabaruc/countproject/${Id}`,
    {
      cache: "no-store",
    }
  );

  if (!res3.ok) {
    throw new Error("NOT FOUND !");
  }
  return res3.json();
}
const LastTabaruc = async ({ Id }) => {
  const tabaruc = await getTabaruc(Id);
  const Total = await GetCount(Id);
  return (
    <>
      <div className="qayb Pyments">
        <div className="last_donote">
          <h2>
            {" "}
            Tirada dadka Tabarucay <span>({Total}) </span>Qof
          </h2>
          <p>Todobadii qof ee Ugu danbeeyay</p>
          {tabaruc.length > 0 ? (
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
