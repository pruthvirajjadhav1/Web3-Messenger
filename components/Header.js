import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import profile from "../img/logo.jpg";
import SideBar from "./sidebar";
function Header() {
  const { user } = useMoralis();
  return <SideBar />;
}

export default Header;
