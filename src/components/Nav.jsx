"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./NavMobile";
import { useSession } from "next-auth/react";
// import { NextNProgress } from "nextjs-progressbar";
function Nav() {
  const sesstion = useSession();
  // states
  const [Activemobile, setActivemobile] = useState(false);
  const [Classn, setClassn] = useState(false);
  const [login, setLogin] = useState(false);
  // functions
  const activeMobile = () => {
    setActivemobile(!Activemobile);
  };
  const Loginfunc = () => {
    setLogin(!login);
    console.log(login);
  };
  const CrentUser = false;
  // const CrentUser = {
  //   Magac: "maxamad",
  //   Id: "6454dba1429d70970c9c0eff",
  //   Lanbar: "4645195",
  // };

  useEffect(() => {
    onscroll = function () {
      if (scrollY > 50) {
        setClassn(true);
      } else {
        setClassn(false);
      }
    };
  });

  return (
    <>
      <div className={Classn ? "nav hoos" : "nav"}>
        <div className="haye">
          <div className="links">
            <div className="logo">
              <Link href="/">
                {Classn ? (
                  <Image
                    src="/Images/Logo_Cadaan.png"
                    width={20}
                    height={20}
                    alt="Logo"
                  />
                ) : (
                  <Image
                    src="/Images/Logo.png"
                    width={20}
                    height={20}
                    alt="Logo"
                  />
                )}

                <p className={"hoos_ac"}>Takriim</p>
              </Link>
            </div>
            <div className="link-items computer">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="">Mashruucyo</Link>
                </li>
                {CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ? (
                  <li>
                    <Link href="/addProject">Mashruuc cusub</Link>
                  </li>
                ) : (
                  <></>
                )}
                <li>
                  <span>
                    <i className="fa-solid fa-earth-africa"></i> So{" "}
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="Mobilee">
              <div onClick={activeMobile} className="tips_mobile">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
            <div className="action-btn Computer">
              {sesstion.status === "authenticated" ? (
                <>
                  <button className="nav-btn" onClick={Loginfunc}>
                    <span className="user_image">
                      <div className="image">
                        <Image
                          src={sesstion.data.user.image}
                          fill={true}
                          alt="sesstion.data.user.image"
                        />
                      </div>
                    </span>
                    <span>{sesstion.data.user.name}</span>
                  </button>
                </>
              ) : (
                <button className="nav-btn out" onClick={Loginfunc}>
                  <Link href={"/login"}>
                    <span>
                      Gal Akoon{" "}
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </span>
                  </Link>
                </button>
              )}
            </div>
            {Activemobile ? <MobileNav /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
