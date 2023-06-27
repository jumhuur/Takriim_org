import Video from "@/components/Video";
import Topinfo from "@/components/Topinfo";
import Provider from "@/components/Provide";
import FromRaber from "@/components/FormRaber";
import LastTabaruc from "@/components/lastTabaruc";
import useSWR from "swr";
async function getData(Id) {
  const res = await fetch(`http://127.0.0.1:3000/api/projects/${Id}`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("NOT FOUND !");
  }

  return res.json();
}

async function GetTotal(Id) {
  const res = await fetch(`http://127.0.0.1:3000/api/Tabaruc/getTotal/${Id}`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });

  return res.json();
}

export async function generateMetadata({ params }) {
  const mashruuc = await getData(params.Id);
  return {
    title: `Ixsaan | ${mashruuc.Name}`,
    description: mashruuc.Macluumaad,
  };
}

async function MainPage({ params }) {
  const { Id } = params;
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   `http://localhost:3000/api/projects/${Id}`,
  //   fetcher
  // );

  const info = await getData(Id);
  const lastTotal = await GetTotal(Id);
  const Total = lastTotal.length > 0 ? lastTotal[0].Total : 0;
  console.log(Total);
  return (
    <>
      <Topinfo info={info} />
      <Provider>
        <div className="Info">
          <div className="haye">
            <div className="laba_qaybood">
              <div className="qayb muuqaal">
                {/* <img src={info && info.Sawir} alt="mashruuc_sawir" /> */}
                {info ? <Video Muuqaal={info.Muuqaal} /> : <></>}
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
                      style={{
                        width: `${(Total / info.Hadaf) * 100}%`,
                      }}
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
                <FromRaber info={info} Id={Id} Total={Total} />
              </div>
              <LastTabaruc Id={Id} />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MainPage;
