import Link from "next/link";
import DevToggle from "@/components/controls/DevToggle";
import PopupContainer from "@/components/controls/PopupContainer";

export default function Navbar() {
  return (
    <>
      <div className="h-16 w-full bg-base-100"></div>
      <div className="navbar fixed top-0 left-0 right-0 bg-base-100 shadow-sm z-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/tutorial">Tutorial</Link>
              </li>
              <li>
                <Link href="/docs/popup/design-tab">Docs</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl mr-2">
            <h1 className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scrollr
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/tutorial">Tutorial</Link>
            </li>
            <li>
              <Link href="/docs/popup/design-tab">Docs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <DevToggle />

          <PopupContainer />
        </div>
      </div>
    </>
  );
}
