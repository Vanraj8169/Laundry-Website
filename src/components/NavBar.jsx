import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navDialog, setNavDialog] = useState(false);

  return (
    <nav>
      <div className="bg-primary-0 h-6 w-full flex items-center justify-center hover:bg-slate-700">
        <span className="text-white">+91 9769152377</span>
      </div>
      <div className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            src="https://i.ibb.co/FDJwhxg/The-Suresh-Laundry-1.png"
            alt="logo"
            className="object-cover max-w-12 max-h-12 w-12 h-12"
          />
          <span className="text-lg font-bold font-primary">
            The Suresh Laundry
          </span>
        </a>

        <div id="nav-menu" className="hidden lg:flex gap-12">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="font-medium hover:text-blue-900 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="font-medium hover:text-blue-900 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="font-medium hover:text-blue-900 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="font-medium hover:text-blue-900 cursor-pointer"
          >
            Address
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex gap-2 items-center bg-primary-0 px-6 py-2 rounded-3xl hover:bg-primary-hover cursor-pointer"
          >
            <span className="text-white">Contact Us</span>
          </Link>
        </div>

        <button className="p-2 lg:hidden" onClick={() => setNavDialog(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {navDialog && (
          <div className="fixed z-10 md:hidden bg-white inset-0 p-3">
            <div id="nav-bar" className="flex justify-between">
              <a href="#" id="brand" className="flex gap-2 items-center">
                <img
                  src="https://i.ibb.co/FDJwhxg/The-Suresh-Laundry-1.png"
                  alt="logo"
                  className="object-cover max-w-12 max-h-12 w-12 h-12"
                />
                <span className="text-lg font-medium font-display">
                  The Suresh Laundry
                </span>
              </a>
              <button
                className="p-2 md:hidden"
                onClick={() => setNavDialog(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="services"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="testimonials"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg cursor-pointer"
              >
                Testimonials
              </Link>
              <Link
                to="footer"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg cursor-pointer"
              >
                Address
              </Link>
            </div>
            <div className="h-[1px] bg-gray-300"></div>
            <Link
              to="contact"
              className="mt-3 ml-4 inline-flex gap-2 items-center bg-primary-0 px-6 py-2 rounded-3xl hover:bg-opacity-80 cursor-pointer"
            >
              <span className="text-white">Contact Us</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
