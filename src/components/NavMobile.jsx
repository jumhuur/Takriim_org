"use client";
import { Auth } from "@/context/context";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/Images/Users.json";
function MobileNav({ Login }) {
  const sesstion = useSession();
  const { User } = Auth();
  return (
    <>
      <div className="Mobile">
        <ul>
          <li>
            <Link href="/">
              <span>
                <i className="fa-solid fa-house"></i> Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>
                <i className="fa-solid fa-layer-group"></i> Mashruucyo
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>
                <i className="fa-solid fa-earth-africa"></i> So{" "}
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </Link>
          </li>
          <li>
            <div className="action-btn">
              {sesstion.status === "authenticated" ? (
                <button className="nav-btn mb">
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
              ) : User ? (
                <button className="nav-btn mb">
                  <span className="user_image">
                    <div className="image">
                      {/* <Image
                        src="/Images/User_line.png"
                        fill={true}
                        alt="sesstion.data.user.image"
                      /> */}
                      <Lottie animationData={animationData} />
                    </div>
                  </span>
                  <span>{User.Magac}</span>
                </button>
              ) : (
                <button className="nav-btn out">
                  <Link href="/login">
                    <span>
                      Gal Akoon{" "}
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </span>
                  </Link>
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
