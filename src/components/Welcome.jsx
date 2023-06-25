"use client";
import Link from "next/link";
import Lottie from "lottie-react";
// import animationData from "../../public/images/70897-online-payments.json";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
function Welcome() {
  const sesstion = useSession();
  const CrentUser = {
    Magac: "maxamad",
    Id: "6454dba1429d70970c9c0eff",
    Lanbar: "4645195",
  };
  const Logout = () => {
    signOut("google");
  };
  return (
    <div className="welcome">
      <div className="haye">
        <div className="labaqaybood">
          <div className="qayb qorall">
            {sesstion.status === "authenticated" ? (
              <>
                <h2>
                  <span>{sesstion.data.user.name}</span> Ku soo Dhawaaw
                  Shabakada Takriim.
                </h2>
                <p>
                  Takriim waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  dadka baahan.
                </p>
              </>
            ) : (
              <>
                <h2>
                  Ku soo Dhawaaw
                  <br /> Shabakada
                  <span>Takriim</span>
                </h2>
                <p>
                  Takriim waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  iyo Tabarucaadka dadka baahan.
                </p>
              </>
            )}
            <div className="btn-welc">
              {sesstion.status === "authenticated" ? (
                <button className="samayso" onClick={Logout}>
                  <i className="fa-solid fa-right-from-bracket"></i> Xidho
                  Akoonka
                </button>
              ) : (
                <button className="samayso">
                  <Link href="/register">
                    <span>
                      Samayso Akoon <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </button>
              )}

              <button className="Xaqiijin">
                <i className="fa-solid fa-circle-check"></i> Xaqiiji Tabaruc
              </button>
            </div>
          </div>
          <div className="qayb sawir">
            {/* <Lottie animationData={animationData} /> */}
            <Image fill={true} src="/Images/Home_01.svg" alt="homepage_ills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
