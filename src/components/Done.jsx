"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/images/112910-confetti.json";
// import Farxad_soud from "../../public/Media/farxad.mp3";
import { useEffect, useRef } from "react";
const Done = ({ Total }) => {
  const code = useRef();
  const Shukran = useRef();
  useEffect(() => {
    code.current.play();
    Shukran.current.play();
  }, []);
  return (
    <div className={"over active"}>
      <div className="haye">
        <div className="inhaye">
          <div className="login  Done">
            <div className="llc bidix_login comm">
              {/* <Image fill={true} src="/Images/comm.svg" alt="Login_img" /> */}
              <Lottie animationData={animationData} />
              <audio ref={code} src="/Media/farxad.mp3" />
              <audio ref={Shukran} src="/Media/Shukran.mp3" />
              {/* <Lottie animationData={animationData} /> */}
              <h2 className="comm done">
                Mashalaah ! deqsinimadiina ayuu mashruucan ku dhamaaday
                <span> {Total}$</span> Ayaad Ku deeqdeen
              </h2>
              <Link href="/">
                <button className="comm">
                  <i className="fa-solid fa-circle-check"></i> OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
