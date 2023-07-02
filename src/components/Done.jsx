"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/Images/123026-celebrations-begin.json";
import animationData2 from "../../public/Images/143796-blue-confetti.json";
import animationData3 from "../../public/Images/97818-celebration-animation.json";
import animationData4 from "../../public/Images/112910-confetti.json";
import animationData5 from "../../public/Images/116495-thank-you-without-text.json";
//97818-celebration-animation 1aad
//123026-celebrations-begin   2aad
//112910-confetti
//143796-blue-confetti
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
              <section className="animation">
                <Lottie animationData={animationData} />
                <Lottie animationData={animationData2} />
                <Lottie animationData={animationData3} />
                <Lottie animationData={animationData4} />
              </section>
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
