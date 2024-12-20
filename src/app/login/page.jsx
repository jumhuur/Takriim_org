"use client";
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/Images/Welcome.json";
import { Auth } from "@/context/context";
function Login() {
  const { SetUser, User } = Auth();
  const { data: sesstion } = useSession();
  const router = useRouter();
  const [Loading, setloading] = useState(false);
  const [LoadingG, setloadingG] = useState(false);
  const [Error, setError] = useState(false);
  if (sesstion?.user || User) {
    router.push("/");
  }

  const [login, setLogin] = useState(true);
  const [inputes, setinputes] = useState({
    Lanbar: "",
    Password: "",
  });

  const LoginFrom = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const Response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(inputes),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await Response.json();

      if (Response.ok) {
        localStorage.setItem("User", JSON.stringify(data));
        SetUser();
        setloading(false);
        router.push("/");
      }

      if (!Response.ok) {
        setloading(false);
        setError(data.Error);
      }
      return Response;
    } catch (Err) {
      setError(true);
      setloading(false);
    }
  };

  const LoginAction = () => {
    signIn("google");
    setloadingG(true);
  };

  const Loginfunc = () => {
    setLogin(!login);
    console.log(login);
  };

  // const Looding = false;
  // const Error = false;

  const onchange_inputes = (e) => {
    setinputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  };
  return (
    <>
      <div className={"over active"}>
        <div className="haye">
          <div className="inhaye">
            <div className="login">
              <div className="llc bidix_login">
                {/* <Image fill={true} src="/Images/Home_01.svg" alt="Login_img" /> */}
                <Lottie animationData={animationData} />
              </div>
              <div className="llc midig_login">
                <div className="close" onClick={Loginfunc}>
                  <Link href="/">
                    <i className="fa-solid fa-xmark"></i>
                  </Link>
                </div>
                <form className="from" onSubmit={LoginFrom}>
                  <div className="dhinac_l Maclumo_login">
                    <h2>Gal Akoon</h2>
                    <p>Soo dhawaaw mar kale .</p>
                  </div>
                  <div className="dhinac_l inputs_login">
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
                    {Loading ? (
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
                    ) : (
                      <button type={"submit"}>
                        Gal Akoon{" "}
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                      </button>
                    )}

                    <div className="orline">
                      <span>Ama</span>
                    </div>
                    {LoadingG ? (
                      <button className="Google">
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
                        </div>{" "}
                      </button>
                    ) : (
                      <>
                        <button onClick={LoginAction} className="Google">
                          <i className="fa-brands fa-google"></i> Ku Gal
                          Gmail-kaga
                        </button>
                      </>
                    )}

                    <p className="Bilaa_akoon">
                      Akoon Ma lihid? <Link href={"/register"}>Samayso</Link>
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

export default Login;
