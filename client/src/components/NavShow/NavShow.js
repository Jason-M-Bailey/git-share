import Navbar from "../Navbar/navbar";
import NavbarLoggedin from "../NavbarLoggedin/navbarloggedin";
import { useState, useEffect } from "react";

function NavShow() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/api/users/currentuser")
      .then((res) => res.json())
      .then((currentuser) => {
        if (currentuser.email) {
          setIsLoggedIn(true);
        }
      });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <NavbarLoggedin isLoggedIn={isLoggedIn} />
      ) : (
        <Navbar isLoggedIn={isLoggedIn} />
      )}
    </>
  );
}

export default NavShow;
