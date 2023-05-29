import { Link } from "react-router-dom";
import HeaderLogo from "../assets/mobile-routine-logo.svg";

export default function TopHeader() {
  return (
    <div className="top-header my-2">
      <Link to="/">
        <img
          src={HeaderLogo}
          alt="Header-Logo"
          title="Logo-Mobile-Routine"
          className="w-[500px]"
        />
      </Link>
    </div>
  );
}
