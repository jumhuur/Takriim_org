"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import evc from "evc-api";
import AlertSax from "./AlertSax";
import Alert from "./Alert";
import { useSession } from "next-auth/react";
import animationData from "../../public/Images/104785-done";
import animationData2 from "../../public/Images/103831-circle-x";
const FromRaber = ({ info, Id, Total }) => {
  const sesstion = useSession();
  const CrentUser =
    sesstion.status === "authenticated" ? sesstion.data.user : "";
  const UserLanbar = CrentUser && "";
  const Tabaruce = CrentUser ? CrentUser.email : "Ixsan2023";
  const Name = CrentUser ? CrentUser.name : "Deeq Bixiye";
  const [Pyment_type, setPyment_type] = useState("zaad");
  const [Looding, setLooding] = useState(false);
  const [wait, setwait] = useState(false);
  // const [total, settotal] = useState(0);
  const [tabaruc, settabaruc] = useState(null);
  const [msg, setmsg] = useState("");
  const [img, setimg] = useState("");
  const [cln, setcln] = useState("");
  const [fildes, setfildes] = useState({
    Lanbar: UserLanbar,
    Lacagta: "",
  });

  const [fildesTabaruc, setfildesTabaruc] = useState({
    Name: Name,
    Lanbar: fildes.Lanbar,
    Lacagta: Number(fildes.Lacagta),
    Id: Id,
    Tabaruce: Tabaruce,
    PymentType: Pyment_type,
  });
  const Tabaruc = Number(fildes.Lacagta) + Number(Total);

  const Somtel = "65";
  const telesom = "63";
  const pattern = /[^0-9]/g;
  const LacagReg = /[^0-9.]/g;

  // on change inputes
  const OnChangeInputes = (e) => {
    setfildes((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    setfildesTabaruc((perv) => ({ ...perv, [e.target.name]: e.target.value }));
  };

  const UpdateAction = async () => {
    const updatenow = await fetch(
      `http://127.0.0.1:3000/api/projects/update/${Id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ Tabaruc }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await updatenow.json();
  };

  const AddTabaruc = async () => {
    try {
      const AddTabaruc = await fetch(
        "http://127.0.0.1:3000/api/Tabaruc/addTabaruc",
        {
          method: "POST",
          body: JSON.stringify(fildesTabaruc),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (AddTabaruc.ok) {
        UpdateAction();
      }
      setLooding(false);
      return AddTabaruc;
    } catch (Err) {
      console.log(Err);
    }
  };

  const PymentAction = (e) => {
    e.preventDefault();
    setmsg("Fadlan Telefankaaga Eeg");
    setwait(true);
    setLooding(true);
    if (Pyment_type === "zaad") {
      // telesom action
      const telesom = () => {
        evc({
          merchantUId: "M0912269",
          apiUserId: "1000297",
          apiKey: "API-1901083745AHX",
          customerMobileNumber: "25263" + fildes.Lanbar,
          description: "description.......",
          amount: String(fildes.Lacagta),
          autoWithdraw: true, // `true` if auto withdraw else `false`
          merchantNo: "252402785", // withdraw to ...
        })
          .then((data) => {
            if (data.responseCode !== "200") {
              // tani sax maaha
              console.log(data.responseMsg);
              //Qaybta saxda ayaa leh  Lakiin tijaabo ahaan ayaan halkan ugu qoray
              // AddTabaruc();
              // setmsg(`Mahadsanid ${fildes.Lacagta} $ Ayaad Bixisay`);
              // setimg(animationData);
              // setcln("Sax");
              // setwait(0);
              //Qaybta qaladka ah
              setmsg("USER_API_IS_NOT_ACTIVE");
              setimg(animationData2);
              setcln("Qalad");
              setwait(0);
              setLooding(false);
            } else {
              AddTabaruc();
              setmsg(`Mahadsanid ${fildes.Lacagta} $ Ayaad Bixisay`);
              setimg("fa-solid fa-circle-check");
              setcln("Sax");
              setwait(0);
            }
          })
          .catch((err) => console.log(err.responseCode));
      };
      telesom();
    }
    // somtel action
    if (Pyment_type === "edahab") {
      const Somtel = () => {
        console.log("Somtel pyment");
        //AddTabaruc()
      };
      Somtel();
    }
  };

  const toggale_zaad = (e) => {
    setPyment_type("zaad");
  };
  const toggale_edahab = (e) => {
    setPyment_type("edahab");
  };
  return (
    <>
      {wait ? <AlertSax Sax={msg} /> : <></>}
      {wait === 0 ? <Alert msg={msg} img={img} cln={cln} /> : <></>}
      <div className="info_fursad">
        <div className="from_bixin">
          <main>
            <form method="post" onSubmit={PymentAction}>
              <div className="pyment_types">
                <div className="raber_switcher">
                  {/* <span>Zaad</span> */}
                  <div className="input">
                    <label
                      onClick={toggale_zaad}
                      className={
                        Pyment_type === "zaad" ? "zaad active" : "zaad"
                      }
                    >
                      <span>
                        <i className="fa-solid fa-circle-check"></i> Zaad
                      </span>
                    </label>
                    <label
                      onClick={toggale_edahab}
                      className={
                        Pyment_type === "edahab" ? "edahab active" : "edahab"
                      }
                    >
                      <span>
                        <i className="fa-solid fa-circle-check"></i> edahab
                      </span>
                    </label>
                    <input type="checkbox" name="payment" value={Pyment_type} />
                  </div>
                  {/* <span>Edahab</span> */}
                </div>
              </div>
              <div className="donter_info">
                <div className="input_feilds">
                  <span className="Ll">
                    <i className="fa-solid fa-sack-dollar"></i>
                  </span>
                  <input
                    onChange={OnChangeInputes}
                    className={"errr"}
                    type="number"
                    placeholder="Lacagta"
                    name="Lacagta"
                    required
                  />
                </div>
                <div className="input_feilds">
                  {Pyment_type === "zaad" ? (
                    <span className="Ll">{telesom}</span>
                  ) : Pyment_type === "edahab" ? (
                    <span className="Ll">{Somtel}</span>
                  ) : (
                    <span className="Ll">No</span>
                  )}
                  <input
                    onChange={OnChangeInputes}
                    type="tel"
                    className={"errr"}
                    placeholder="Lanbar"
                    name="Lanbar"
                    value={fildes.Lanbar}
                    required
                  />
                  <input
                    type="text"
                    name="Id"
                    hidden
                    value={info && info._id}
                  />
                  <input
                    onChange={OnChangeInputes}
                    type="number"
                    name="Tabaruc"
                    hidden
                    value={Number(fildes.Lacagta) + Number(fildes.Lacagta)}
                  />
                  <input
                    type="text"
                    hidden
                    value={Pyment_type}
                    name="PymentType"
                  />
                  {CrentUser ? (
                    <>
                      <input
                        type="text"
                        hidden
                        name="Name"
                        value={CrentUser.Magac}
                      />
                      <input
                        type="text"
                        hidden
                        name="Tabaruce"
                        value={CrentUser.Id}
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        hidden
                        name="Name"
                        value={"Deeq Bixiye"}
                      />
                      <input
                        type="text"
                        hidden
                        name="Tabaruce"
                        value={"Ixsan2023"}
                      />
                    </>
                  )}
                </div>
                {!Looding ? (
                  <button className={"bixi"}>
                    <i className="fa-solid fa-paper-plane"></i> Bixi Hada
                  </button>
                ) : (
                  <button className={"bixi"}>
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
                    </div>
                  </button>
                )}
                {CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ? (
                  <button className="bixi manually">
                    <Link href={`/manually/${info && info._id}`}>
                      <span>
                        <i class="fa-solid fa-circle-plus"></i> Ku Dar Tabaruc
                        (manually)
                      </span>
                    </Link>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default FromRaber;
