"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
function Qayabaha() {
  const searchParams = useSearchParams();
  const search = searchParams.get("Qayb");
  console.log("qaybaha", search);
  // console.log("waybha", params);
  return (
    <div className="qaybha">
      <div className="qayb">
        <div className="icon_Q">
          <Link href="?Qayb=Caafimaad">
            <p>
              <i className="fa-solid fa-heart-pulse"></i> Cafimaad
            </p>
          </Link>
        </div>
      </div>
      <div className="qayb">
        <div className="icon_Q">
          <Link href="?Qayb=Waxbarasho">
            <p>
              <i className="fa-solid fa-graduation-cap"></i> Waxbarasho
            </p>
          </Link>
        </div>
      </div>
      <div className="qayb">
        <div className="icon_Q">
          <Link href="?Qayb=Diini">
            <p>
              <i className="fa-solid fa-kaaba"></i> Diini
            </p>
          </Link>
        </div>
      </div>
      <div className="qayb">
        <div className="icon_Q">
          <Link href="?Qayb=Taageerid">
            <p>
              <i className="fa-solid fa-handshake-angle"></i> Taageero
            </p>
          </Link>
        </div>
      </div>
      <div className="qayb">
        <div className="icon_Q">
          <Link href="?Qayb=Daryeel">
            <p>
              <i className="fa-solid fa-children"></i> Daryeel
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Qayabaha;
