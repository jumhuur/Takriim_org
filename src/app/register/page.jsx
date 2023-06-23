"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Register() {
  const [inputes, setinputes] = useState({
    Magac: "",
    Lanbar: "",
    Admin: false,
    Password: "",
  });

  const Looding = false;
  const Error = false;

  const onchange_inputes = (e) => {
    setinputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputes);
  };

  // const { register, Looding, Error } = UseRegister();
  // const RegisterAction = (e) => {
  //   e.preventDefault();
  //   register(inputes.Magac, inputes.Lanbar, inputes.Admin, inputes.Password);
  //   redirect("/");
  // };

  const RegisterAction = () => {
    console.log("RegisterAction");
  };

  return (
    <>
      <div className="over active">
        <div className="haye">
          <div className="inhaye">
            <div className="login">
              <div className="llc bidix_login">
                <Image fill={true} src="/Images/Home_01.svg" alt="Login_img" />
              </div>
              <div className="llc midig_login">
                <div className="close">
                  <Link href="/">
                    <i className="fa-solid fa-xmark"></i>
                  </Link>
                </div>
                <form className="from">
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
                    />
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
                      <button type={"submit"} onClick={RegisterAction}>
                        <i className="fa-solid fa-user-plus"></i> Samayso
                      </button>
                    ) : (
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
                    )}

                    <p className="Bilaa_akoon">
                      Akoon Ma leedahay? <Link href="/login">Gal Akoon</Link>
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
