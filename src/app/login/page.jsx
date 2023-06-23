"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/Images/130776-create-account";

function Login() {
  const sesstion = useSession();
  const router = useRouter();
  const [Loading, setloading] = useState(false);
  if (sesstion.status === "authenticated") {
    router?.push("/");
  }
  const [login, setLogin] = useState(true);
  const [inputes, setinputes] = useState({
    Lanbar: "",
    Password: "",
  });

  const LoginAction = () => {
    signIn("google");
    setloading(true);
  };

  const Loginfunc = () => {
    setLogin(!login);
    console.log(login);
  };

  const Looding = false;
  const Error = false;

  const onchange_inputes = (e) => {
    setinputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
                <div className="from">
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
                    />
                    <input
                      onChange={onchange_inputes}
                      type={"password"}
                      placeholder="Passwor-kaaga"
                      autoComplete="off"
                      name="Password"
                    />
                    {Looding ? (
                      <button>
                        <div class="sk-circle">
                          <div class="sk-circle1 sk-child"></div>
                          <div class="sk-circle2 sk-child"></div>
                          <div class="sk-circle3 sk-child"></div>
                          <div class="sk-circle4 sk-child"></div>
                          <div class="sk-circle5 sk-child"></div>
                          <div class="sk-circle6 sk-child"></div>
                          <div class="sk-circle7 sk-child"></div>
                          <div class="sk-circle8 sk-child"></div>
                          <div class="sk-circle9 sk-child"></div>
                          <div class="sk-circle10 sk-child"></div>
                          <div class="sk-circle11 sk-child"></div>
                          <div class="sk-circle12 sk-child"></div>
                        </div>
                      </button>
                    ) : (
                      <button type={"submit"}>
                        Gal Akoon{" "}
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                      </button>
                    )}
                    {Loading ? (
                      <button className="Google">
                        <div class="sk-circle">
                          <div class="sk-circle1 sk-child"></div>
                          <div class="sk-circle2 sk-child"></div>
                          <div class="sk-circle3 sk-child"></div>
                          <div class="sk-circle4 sk-child"></div>
                          <div class="sk-circle5 sk-child"></div>
                          <div class="sk-circle6 sk-child"></div>
                          <div class="sk-circle7 sk-child"></div>
                          <div class="sk-circle8 sk-child"></div>
                          <div class="sk-circle9 sk-child"></div>
                          <div class="sk-circle10 sk-child"></div>
                          <div class="sk-circle11 sk-child"></div>
                          <div class="sk-circle12 sk-child"></div>
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
                      Akoon Ma lihid? <Link href="/register">Samayso</Link>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
