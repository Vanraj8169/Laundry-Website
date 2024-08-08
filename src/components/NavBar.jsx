import { useState } from "react";

const NavBar = () => {
  const [navDialog, setNavDialog] = useState(false);

  return (
    <nav>
      <div className="bg-primary-0 h-6 w-full flex items-center justify-center">
        <span className="text-white">+91 9769152377</span>
      </div>
      <div className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            src="https://www.todesktop.com/cdn-cgi/image/width=48,height=48,f=auto,fit=cover/_app/immutable/assets/todesktop-logo.bn2Qe8sb.png"
            alt="logo"
            className="object-cover max-w-12 max-h-12 w-12 h-12"
          />
          <span className="text-lg font-bold font-primary">ToDesktop</span>
        </a>

        <div id="nav-menu" className="hidden lg:flex gap-12">
          {["Home", "Services", "Testimonials", "Contact us"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="font-medium hover:text-blue-900"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <button className="flex gap-2 items-center bg-primary-0 px-6 py-2 rounded-3xl hover:bg-opacity-80">
            <span className="text-white">Contact Us</span>
          </button>
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
                  src="https://www.todesktop.com/cdn-cgi/image/width=48,height=48,f=auto,fit=cover/_app/immutable/assets/todesktop-logo.bn2Qe8sb.png"
                  alt="logo"
                  className="object-cover max-w-12 max-h-12 w-12 h-12"
                />
                <span className="text-lg font-medium font-display">
                  ToDesktop
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
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Services
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                Contact Us
              </a>
            </div>
            <div className="h-[1px] bg-gray-300"></div>
            <button className="mt-3 ml-4 flex gap-2 items-center bg-primary-0 px-6 py-2 rounded-3xl hover:bg-opacity-80">
              <span className="text-white">Contact Us</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
