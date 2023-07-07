"use client";
import Link from "next/link";
// import useSWR from "swr";
import { useEffect, useRef, useState } from "react";
import evc from "evc-api";
import AlertSax from "./AlertSax";
import Alert from "./Alert";
import { useSession } from "next-auth/react";
import animationData from "../../public/Images/104785-done";
import animationData2 from "../../public/Images/103831-circle-x";
const MenuallyFrom = ({ info, Id, Total }) => {
  const sesstion = useSession();
  const CrentUser =
    sesstion.status === "authenticated" ? sesstion.data.user : "";
  const UserLanbar = CrentUser && "";
  const Tabaruce = CrentUser ? CrentUser.email : "Ixsan2023";
  //   const Name = CrentUser ? CrentUser.name : "Deeq Bixiye";
  const [Pyment_type, setPyment_type] = useState("zaad");
  const [Looding, setLooding] = useState(false);
  const [wait, setwait] = useState(false);
  // const [total, settotal] = useState(0);
  const [tabaruc, settabaruc] = useState(null);
  const [msg, setmsg] = useState("");
  const [img, setimg] = useState("");
  const [cln, setcln] = useState("");
  const FromRset = useRef();
  const [fildes, setfildes] = useState({
    Lanbar: UserLanbar,
    Lacagta: "",
  });

  const [fildesTabaruc, setfildesTabaruc] = useState({
    Name: "",
    Lanbar: fildes.Lanbar,
    Lacagta: Number(fildes.Lacagta),
    Id: Id,
    Tabaruce: Tabaruce,
    PymentType: Pyment_type,
  });
  const Tabaruc = Number(fildes.Lacagta) + Number(Total);

  const Somtel = "65";
  const telesom = "63";
  const Evc = "252";
  const pattern = /[^0-9]/g;
  const LacagReg = /[^0-9.]/g;

  // on change inputes
  const OnChangeInputes = (e) => {
    setfildes((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    setfildesTabaruc((perv) => ({ ...perv, [e.target.name]: e.target.value }));
  };

  // real time data  isticmaal swr next recomm
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, mutate, isLoading } = useSWR(`/api/projects/getall`, fetcher);

  const UpdateAction = async () => {
    const updatenow = await fetch(`/api/projects/update/${Id}`, {
      method: "PATCH",
      body: JSON.stringify({ Tabaruc }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await updatenow.json();
  };

  const AddTabaruc = async () => {
    try {
      const AddTabaruc = await fetch("/api/Tabaruc/addTabaruc", {
        method: "POST",
        body: JSON.stringify(fildesTabaruc),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (AddTabaruc.ok) {
        UpdateAction();
        //setLooding(false);
        FromRset.current.reset();
      }
      setLooding(false);
      setwait(false);
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
    AddTabaruc();
  };

  const toggale_zaad = (e) => {
    setPyment_type("zaad");
  };
  const toggale_edahab = (e) => {
    setPyment_type("edahab");
  };
  const toggale_Evc = (e) => {
    setPyment_type("Evc");
  };
  return (
    <>
      {wait ? <AlertSax Sax={msg} /> : <></>}
      {wait === 0 ? <Alert msg={msg} img={img} cln={cln} /> : <></>}
      <div className="info_fursad">
        <div className="from_bixin">
          <main>
            <form ref={FromRset} method="post" onSubmit={PymentAction}>
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
                    <label
                      onClick={toggale_Evc}
                      className={Pyment_type === "Evc" ? "Evc active" : "Evc"}
                    >
                      <span>
                        <i className="fa-solid fa-circle-check"></i> Evc
                      </span>
                    </label>
                    <input type="checkbox" name="payment" value={Pyment_type} />
                  </div>
                  {/* <span>Evc</span> */}
                </div>
              </div>
              <div className="donter_info">
                <div className="input_feilds">
                  <span className="Ll">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    onChange={OnChangeInputes}
                    type="text"
                    name="Name"
                    value={fildesTabaruc.Name}
                    required
                    placeholder="Magaca"
                  />
                </div>

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
                  ) : Pyment_type === "Evc" ? (
                    <span className="Ll">{Evc}</span>
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
                        name="Tabaruce"
                        value={CrentUser.Id}
                      />
                    </>
                  ) : (
                    <>
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
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default MenuallyFrom;
