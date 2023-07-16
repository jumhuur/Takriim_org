"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Auth } from "@/context/context";
import Lottie from "lottie-react";
import animationData from "../../../public/Images/Welcome1.json";

function Register() {
  const route = useRouter();
  const { SetUser, User } = Auth();
  const { data: sesstion } = useSession();
  if (User || sesstion?.user) {
    route.push("/");
  }
  const [inputes, setinputes] = useState({
    Magac: "",
    Lanbar: "",
    Admin: false,
    Password: "",
  });
  const [Looding, setLooding] = useState(false);
  const [Error, setError] = useState(false);

  const Resgister = async (e) => {
    e.preventDefault();
    try {
      setLooding(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(inputes),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const Info = await res.json();
      if (!res.ok) {
        setLooding(false);
        setError(Info.Error);
        console.log(Info.Error);
      }

      if (res.ok) {
        setLooding(false);
        localStorage.setItem("User", JSON.stringify(Info));
        SetUser();
        route.push("/");
      }
      return res;
    } catch (Err) {
      setError(true);
    }
  };

  // const Looding = false;
  // const Error = false;

  const onchange_inputes = (e) => {
    setinputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  };

  // const { register, Looding, Error } = UseRegister();
  // const RegisterAction = (e) => {
  //   e.preventDefault();
  //   register(inputes.Magac, inputes.Lanbar, inputes.Admin, inputes.Password);
  //   redirect("/");
  // };

  // const RegisterAction = () => {
  //   console.log("RegisterAction");
  // };

  return (
    <>
      <div className="over active">
        <div className="haye">
          <div className="inhaye">
            <div className="login">
              <div className="llc bidix_login">
                {/* <Image fill={true} src="/Images/Home_01.svg" alt="Login_img" /> */}
                <Lottie animationData={animationData} />
              </div>
              <div className="llc midig_login">
                <div className="close">
                  <Link href="/">
                    <i className="fa-solid fa-xmark"></i>
                  </Link>
                </div>
                <form className="from" onSubmit={Resgister}>
                  <div className="dhinac_l Maclumo_login">
                    <h2>Samayso Akoon</h2>
                    <p>Ku samayso akoon daqiiqad Gudaheed.</p>
                  </div>
                  <div className="dhinac_l inputs_login">
                    <input
                      onChange={onchange_inputes}
                      type={"text"}
                      placeholder="Magacaaga"
                      autoComplete="off"
                      name="Magac"
                      required
                    />
                    <input
                      onChange={onchange_inputes}
                      type={"tel"}
                      placeholder="Lanbaraakaga"
                      autoComplete="off"
                      name="Lanbar"
                      required
                    />
                    <input
                      onChange={onchange_inputes}
                      type={"password"}
                      placeholder="Passwor-kaaga"
                      autoComplete="off"
                      name="Password"
                      required
                    />
                    <input
                      onChange={onchange_inputes}
                      type={"text"}
                      placeholder="Passwor-kaaga"
                      autoComplete="off"
                      value={inputes.Admin}
                      name="Admin"
                      hidden
                    />
                    {!Looding ? (
                      <button type={"submit"}>
                        <i className="fa-solid fa-user-plus"></i> Samayso
                      </button>
                    ) : (
                      <button>
                        <div className="sk-circle">
                          <div className="sk-circle1 sk-child"></div>
                          <div className="sk-circle2 sk-child"></div>
                          <div className="sk-circle3 sk-child"></div>
                          <div className="sk-circle4 sk-child"></div>
                          <div className="sk-circle5 sk-child"></div>
                          <div className="sk-circle6 sk-child"></div>
                          <div className="sk-circle7 sk-child"></div>
                          <div className="sk-circle8 sk-child"></div>
                          <div className="sk-circle9 sk-child"></div>
                          <div className="sk-circle10 sk-child"></div>
                          <div className="sk-circle11 sk-child"></div>
                          <div className="sk-circle12 sk-child"></div>
                        </div>
                      </button>
                    )}

                    <p className="Bilaa_akoon">
                      Akoon Ma leedahay? <Link href={"/login"}>Gal Akoon</Link>
                    </p>
                    {Error ? (
                      <p className="Error">
                        <i className="fa-solid fa-circle-exclamation"></i>{" "}
                        {Error}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
