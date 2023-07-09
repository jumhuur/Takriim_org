import Topinfo from "@/components/Topinfo";
import Provider from "@/components/Provide";
import LastTabaruc from "@/components/lastTabaruc";
import Comming from "@/components/Comming";
import Done from "@/components/Done";
import MenuallyFrom from "@/components/ManuallyFrom";
async function getData(Id) {
  const res = await fetch(`https://tabaruc.vercel.app/api/projects/${Id}`, {
    // next: { revalidate: 1 },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("NOT FOUND !");
  }

  return res.json();
}

async function GetTotal(Id) {
  const res = await fetch(
    `https://tabaruc.vercel.app/api/Tabaruc/getTotal/${Id}`,
    {
      next: { revalidate: 1 },
      // cache: "no-store",
    }
  );

  return res.json();
}

export async function generateMetadata({ params }) {
  const mashruuc = await getData(params.Id);
  return {
    title: `Taysiir | ${mashruuc.Name}`,
    description: mashruuc.Macluumaad,
  };
}

async function Menually({ params }) {
  const { Id } = params;
  const info = await getData(Id);
  const lastTotal = await GetTotal(Id);
  const Total = lastTotal.length > 0 ? lastTotal[0].Total : 0;
  return (
    <>
      {Total >= info?.Hadaf && <Done Total={Total} />}
      {!info?.Active && <Comming />}
      <Topinfo info={info} />
      <Provider>
        <div className="Info">
          <div className="haye">
            <div className="laba_qaybood">
              <div className="qayb muuqaal">
                {/* <img src={info && info.Sawir} alt="mashruuc_sawir" /> */}
                {/* {info ? <Video Muuqaal={info.Muuqaal} /> : <></>} */}
                <div className="macluumaad_bidix">
                  <div className="qoraal">
                    <h2>Macluumaadka Masharuuca</h2>
                    <p>{info.Macluumaad}</p>
                  </div>
                </div>
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
                        {Math.floor((Number(Total) / info.Hadaf) * 100).toFixed(
                          0
                        )}
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
                      Mahadsanidiin deqsinimadiina ayuu mashruucan ku dhamaaday
                      <span> {Total}$</span> Ayaad Ku deeqdeen !
                    </h2>
                  </>
                ) : (
                  <MenuallyFrom info={info} Id={Id} Total={Total} />
                )}
              </div>
              <LastTabaruc Id={Id} />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default Menually;