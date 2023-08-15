import Image from "next/image";
import Link from "next/link";
// import Lottie from "lottie-react";
// import animationData from "../../public/Images/nostarted1.json";

const Comming = () => {
  return (
    <div className={"over active"}>
      <div className="haye">
        <div className="inhaye">
          <div className="login  comm">
            <div className="llc bidix_login comm">
              <Image fill={true} src="/Images/comm.svg" alt="Login_img" />
              {/* <Lottie animationData={animationData} /> */}
              <h2 className="comm">Waan Ka Xunahay ! Mashruucan Ma furan</h2>
              <Link href="/">
                <button className="comm">
                  <i className="fa-solid fa-arrow-left"></i> Ku Noqo Xagii Hore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comming;
