"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/Images/123026-celebrations-begin.json";
import animationData2 from "../../public/Images/143796-blue-confetti.json";
import animationData3 from "../../public/Images/97818-celebration-animation.json";
import animationData4 from "../../public/Images/112910-confetti.json";
import animationData5 from "../../public/Images/68064-success-celebration.json";
import { useEffect, useRef } from "react";
const Done = ({ Total }) => {
  const code = useRef();
  const Shukran = useRef();
  useEffect(() => {
    code.current.play();
    code.current.loop = true;
    Shukran.current.play();
  }, []);
  return (
    <div className={"over active"}>
      <div className="haye">
        <div className="inhaye">
          <div className="login  Done">
            <div className="llc bidix_login comm">
              <section className="animation">
                <Lottie animationData={animationData} />
                <Lottie animationData={animationData2} />
                <Lottie animationData={animationData3} />
                <Lottie animationData={animationData4} />
                <Lottie animationData={animationData5} />
              </section>
              <audio ref={code} src="/Media/farxad1.mp3" />
              <audio ref={Shukran} src="/Media/Shukran.mp3" />
              {/* <Lottie animationData={animationData} /> */}
              <h2 className="comm done">
                Mashalaah ! deqsinimadiina ayuu mashruucan ku dhamaaday
                <span> {Total}$</span> Ayaad Ku deeqdeen
              </h2>
              <Link href="/">
                <button className="comm">
                  <i className="fa-solid fa-face-smile"></i> OK
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
