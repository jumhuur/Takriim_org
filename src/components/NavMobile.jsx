"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function MobileNav({ Login }) {
  const sesstion = useSession();
  const CrentUser = {
    Magac: "maxamad",
    Id: "6454dba1429d70970c9c0eff",
    Lanbar: "4645195",
  };
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
          {CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ? (
            <li>
              <Link href="/addProject">
                <span>
                  <i className="fa-solid fa-gauge-high"></i> dashboard
                </span>
              </Link>
            </li>
          ) : (
            <></>
          )}
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
