"use client";

import { useState } from "react";
function Provider({ children }) {
  const [login, setLogin] = useState(false);
  const cali = "cali";
  const Loginfunc = () => {
    setLogin(!login);
    console.log(login);
  };
  return (
    <>
      <main logfun={Loginfunc} state={login} cali={cali}>
        {children}
      </main>
    </>
  );
}

export default Provider;
