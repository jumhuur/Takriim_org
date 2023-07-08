"use client";
import Link from "next/link";
import Lottie from "lottie-react";
// import animationData from "../../public/images/70897-online-payments.json";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Auth } from "@/context/context";
function Welcome() {
  const sesstion = useSession();
  const { User } = Auth();
  const Logout = () => {
    signOut("google");
  };
  return (
    <div className="welcome">
      <div className="haye">
        <div className="labaqaybood">
          <div className="qayb qorall">
            {User ? (
              <>
                <h2>
                  <span className="name">{User.Magac}</span> Ku soo Dhawoow
                  Shabakada Taysiir.
                </h2>
                <p>
                  Taysiir waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  dadka baahan.
                </p>
              </>
            ) : (
              <>
                (
                <h2>
                  Ku soo Dhawaaw
                  <br /> Shabakada
                  <span>Taysiir</span>
                </h2>
                <p>
                  Taysiir waa shabakada Loogu tallo gallay Ururinta Muwaacanida
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

              <button className="Xaqiijin" disabled>
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
