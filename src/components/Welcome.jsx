"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/Images/Welcome1.json";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Auth } from "@/context/context";
import { motion } from "framer-motion";
function Welcome() {
  const sesstion = useSession();
  const { User, MyLogout } = Auth();
  const Logout = () => {
    signOut("google");
  };

  const fromLogout = () => {
    MyLogout();
  };
  return (
    <div className="welcome">
      <div className="haye">
        <div className="labaqaybood">
          <div className="qayb qorall">
            {User ? (
              <>
                <motion.h2
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  <span className="name">{User.Magac}</span>
                  <br />
                  Ku soo Dhawoow Shabakada Taysiir.
                </motion.h2>
                <p>
                  Taysiir waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  dadka baahan.
                </p>
              </>
            ) : sesstion?.status === "authenticated" ? (
              <>
                <motion.h2
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  <span className="name">{sesstion.data.user.name}</span>
                  <br />
                  Ku soo Dhawoow Shabakada Taysiir.
                </motion.h2>
                <p>
                  Taysiir waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  dadka baahan.
                </p>
              </>
            ) : (
              <>
                <motion.h2
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  Ku soo Dhawaaw
                  <br /> Shabakada
                  <span>Taysiir</span>
                </motion.h2>
                <motion.p
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  Taysiir waa shabakada Loogu tallo gallay Ururinta Muwaacanida
                  iyo Tabarucaadka dadka baahan.
                </motion.p>
              </>
            )}
            <motion.div
              className="btn-welc"
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "just" }}
            >
              {sesstion.status === "authenticated" ? (
                <button
                  className="samayso"
                  onClick={Logout}
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2.7, type: "spring" }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Xidho
                  Akoonka
                </button>
              ) : User ? (
                <button
                  className="samayso"
                  onClick={fromLogout}
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2.5, type: "tween" }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Xidho
                  Akoonka
                </button>
              ) : (
                <button
                  className="samayso"
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 3, type: "tween" }}
                >
                  <Link href="/register">
                    <span>
                      Samayso Akoon <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </button>
              )}

              <button
                className="Xaqiijin"
                disabled
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                <i className="fa-solid fa-circle-check"></i> Xaqiiji Tabaruc
              </button>
            </motion.div>
          </div>
          <motion.div
            className="qayb sawir"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "just" }}
          >
            <Lottie animationData={animationData} />
            {/* <Image fill={true} src="/Images/Home_01.svg" alt="homepage_ills" /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
