import React from "react";
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
// import { getCookie } from "../utils/cookies";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
// import { updateToLoginStatus } from "../store/toLoginSlice";
import "./NavBar.css";

const NavBar = () => {
  // const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={() => {
          dispatch(updateNavStatus(!navOpenStatus));
        }}
        className="h-[2rem] py-[1.2rem] nav z-[200] font-serif bg-white justify-center hidden lg:flex "
        maxWidth="xl"
        isBordered
      >
        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <div className="flex flex-row gap-2">
              <MdEmail className="text-orange-500 mt-1" size={17} />
              <span className="text-zinc-500 text-md">support@villa.com</span>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={() => {
          dispatch(updateNavStatus(!navOpenStatus));
        }}
        className="h-[5rem] nav z-[200] font-serif bg-white"
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarItem>
            <Link to="/" className="font-bold text-inherit font-serif text-2xl text-black">
              VILLA.COM
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <Link
              to="../Home"
              className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Properties"
              className={curTab === "Properties" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              PROPERTIES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Details"
              className={curTab === "Details" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              DETAILS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Contact"
              className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              CONTACT US
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <a className="flex gap-[1rem]" href="tel:+1 (844) 671-7473">
              <Button
                startContent={<FaPhone />}
                variant="solid"
                color="warning"
                className="text-white hover:scale-110 bg-[#0a97b0]"
                radius="none"
              >
                Call Us
              </Button>
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavBar;
