import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const tooltipRef = useRef(null); // Create a ref for the tooltip element
  const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const logoImgRef = useRef(null);
  const rightNavRef = useRef(null);
  const hotTopicRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle tooltip display
    function handleTooltip(e) {
      const tooltipText = e.target.getAttribute("data-tooltip");
      const tooltip = tooltipRef.current;

      if (tooltip) {
        tooltip.textContent = tooltipText;
        tooltip.style.opacity = 1;

        // Get the bounding rectangle of the tooltip element
        const tooltipRect = tooltip.getBoundingClientRect();

        // Calculate the position based on mouse coordinates and tooltip dimensions
        const left = e.clientX - tooltipRect.width / 25;
        const top = e.clientY - tooltipRect.height + 25; // Adjust for tooltip position

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
      }
    }

    // Function to handle tooltip hide
    function hideTooltip() {
      const tooltip = tooltipRef.current;
      if (tooltip) {
        tooltip.style.opacity = 0;
      }
    }

    // Add event listeners to tooltip triggers
    const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");
    tooltipTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseover", handleTooltip);
      trigger.addEventListener("mousemove", handleTooltip);
      trigger.addEventListener("mouseout", hideTooltip);
    });

    // Remove event listeners on component unmount
    return () => {
      tooltipTriggers.forEach((trigger) => {
        trigger.removeEventListener("mouseover", handleTooltip);
        trigger.removeEventListener("mousemove", handleTooltip);
        trigger.removeEventListener("mouseout", hideTooltip);
      });
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 60);
      }
    }

    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check initial window width
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    const rightNav = rightNavRef.current;
    const header = headerRef.current;
    const logoImg = logoImgRef.current;

    if (isDesktop && navbar && rightNav && header && logoImg) {
      if (isScrolled) {
        navbar.classList.add("mt-4", "rounded-full", "mx-auto");
        navbar.classList.remove("min-w-full");
        navbar.classList.add("w-11/12");
        rightNav.classList.remove("min-w-32");
        rightNav.classList.add("min-w-36");
        header.classList.add("flex", "justify-center");
        logoImg.src = "/img/logo.png";
      } else {
        navbar.classList.remove("mt-4", "rounded-full", "mx-auto");
        navbar.classList.add("min-w-full");
        navbar.classList.remove("w-11/12");
        rightNav.classList.add("min-w-32");
        rightNav.classList.remove("min-w-36");
        header.classList.remove("flex", "justify-center");
        logoImg.src = "/img/logo_2.png";
      }
    }
  }, [isScrolled, isDesktop]);

  return (
    <header id="header" ref={headerRef}>
      <nav
        id="navbar"
        ref={navbarRef}
        className="fixed z-[100] flex min-w-full max-w-full items-center justify-between bg-slate-50 bg-opacity-70 px-8 py-1 shadow-lg backdrop-blur-md transition-all duration-500 ease-out md:px-12"
      >
        <Link to={"/"}>
          <img
            className="w-28 sm:w-40"
            ref={logoImgRef}
            src="/img/logo_2.png"
            alt=""
          />
        </Link>
        <ul className="hidden items-center gap-x-10 md:flex">
          <li>
            <a href="#" className="tooltip-trigger" data-tooltip="Home">
              <svg
                className="w-6 object-contain"
                data-tooltip="Home"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-tooltip="Home"
                  d="M4 12H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="Home"
                  d="M4 5H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="Home"
                  d="M4 19H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="tooltip-trigger">
              <svg
                className="w-6 object-contain"
                data-tooltip="Blog"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-tooltip="Blog"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.36 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8.92C20.5036 8.71548 20.4404 8.51535 20.32 8.35L16.17 2.43C16.0791 2.29891 15.9581 2.19148 15.8172 2.11667C15.6763 2.04187 15.5195 2.00187 15.36 2V2Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="tooltip-trigger">
              <svg
                className="w-6 object-contain"
                data-tooltip="About"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-tooltip="About"
                  d="M18.5 2H6.5C5.39543 2 4.5 2.89543 4.5 4V20C4.5 21.1046 5.39543 22 6.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V4C20.5 2.89543 19.6046 2 18.5 2Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="About"
                  d="M2.5 6.74112H6.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="About"
                  d="M2.5 17.0006H6.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="About"
                  d="M9.11328 16.4515L9.46428 15.1749C10.6257 10.9511 15.6008 10.9511 16.7622 15.1749L17.1132 16.4515"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-tooltip="About"
                  d="M13.1138 11.9929C14.3411 11.9929 15.336 10.998 15.336 9.77068C15.336 8.54338 14.3411 7.54846 13.1138 7.54846C11.8865 7.54846 10.8916 8.54338 10.8916 9.77068C10.8916 10.998 11.8865 11.9929 13.1138 11.9929Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="flex gap-3">
          <div id="right-nav" className="min-w-32 text-end" ref={rightNavRef}>
            <ul className="flex items-center gap-4">
              <li>
                {" "}
                <button onClick={() => {navigate('/login')}}>Login</button>
              </li>
              <li className="search">
                <a href="#">
                  <svg
                    className="w-4"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.79 15.15C14.656 15.15 17.79 12.016 17.79 8.14999C17.79 4.284 14.656 1.14999 10.79 1.14999C6.92405 1.14999 3.79004 4.284 3.79004 8.14999C3.79004 12.016 6.92405 15.15 10.79 15.15Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                    />
                    <path
                      d="M5.91027 13.17L1.03027 18.05"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </a>
              </li>
              <li className="user">
                <a href="#">
                  <svg
                    className="w-4"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 21L1.79 18.12C4.4 8.62003 15.6 8.62003 18.21 18.12L19 21"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.98C12.7614 10.98 15 8.74144 15 5.98001C15 3.21859 12.7614 0.980011 10 0.980011C7.23858 0.980011 5 3.21859 5 5.98001C5 8.74144 7.23858 10.98 10 10.98Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </a>
              </li>
              <li className="star">
                <a href="#">
                  <svg
                    className="w-4 hover:fill-orange-300 transition-all ease-in-out"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0002 2.19001C10.0692 1.97096 10.2063 1.77965 10.3916 1.64384C10.5768 1.50803 10.8005 1.43481 11.0302 1.43481C11.2598 1.43481 11.4835 1.50803 11.6688 1.64384C11.854 1.77965 11.9911 1.97096 12.0602 2.19001L13.9202 7.91001H19.9202C20.1581 7.90101 20.3923 7.97015 20.5872 8.10684C20.7821 8.24354 20.9269 8.44029 20.9995 8.66702C21.072 8.89376 21.0684 9.13801 20.989 9.36246C20.9097 9.58691 20.7591 9.77922 20.5602 9.91001L15.6902 13.44L17.5502 19.17C17.6237 19.3883 17.6256 19.6243 17.5555 19.8437C17.4853 20.0631 17.3469 20.2544 17.1604 20.3895C16.9739 20.5246 16.749 20.5966 16.5187 20.5949C16.2884 20.5932 16.0647 20.5179 15.8802 20.38L11.0002 16.81L6.13017 20.35C5.94567 20.4879 5.72193 20.5632 5.49161 20.5649C5.26129 20.5666 5.03645 20.4946 4.84994 20.3595C4.66342 20.2244 4.525 20.0331 4.45487 19.8137C4.38475 19.5943 4.38661 19.3583 4.46017 19.14L6.32017 13.41L1.45017 9.88001C1.25125 9.74922 1.10062 9.55691 1.02129 9.33246C0.941956 9.10801 0.938287 8.86376 1.01084 8.63702C1.0834 8.41029 1.22818 8.21354 1.42308 8.07684C1.61798 7.94015 1.85228 7.87101 2.09017 7.88001H8.09017L10.0002 2.19001Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="tooltip" className="tooltip" ref={tooltipRef}></div>

      <div className="mobile-nav flex justify-center md:hidden">
        <nav className="fixed bottom-2 z-[100] mx-auto flex w-[90%] items-center justify-between rounded-full border-2 border-gray-300 bg-slate-50 bg-opacity-90 px-8 py-3 shadow-lg backdrop-blur-md transition-all duration-500 ease-out md:px-12">
          <ul className="mx-auto flex gap-x-10">
            <li>
              <a className="flex flex-col items-center gap-1" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Home</p>
              </a>
            </li>
            <li>
              <a className="flex flex-col items-center gap-1" href="#">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.36 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8.92C20.5036 8.71548 20.4404 8.51535 20.32 8.35L16.17 2.43C16.0791 2.29891 15.9581 2.19148 15.8172 2.11667C15.6763 2.04187 15.5195 2.00187 15.36 2V2Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>

                <p>Blog</p>
              </a>
            </li>
            <li>
              <a className="flex flex-col items-center gap-1" href="#">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 2H6.5C5.39543 2 4.5 2.89543 4.5 4V20C4.5 21.1046 5.39543 22 6.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V4C20.5 2.89543 19.6046 2 18.5 2Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 6.74112H6.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 17.0006H6.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.11328 16.4515L9.46428 15.1749C10.6257 10.9511 15.6008 10.9511 16.7622 15.1749L17.1132 16.4515"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.1138 11.9929C14.3411 11.9929 15.336 10.998 15.336 9.77068C15.336 8.54338 14.3411 7.54846 13.1138 7.54846C11.8865 7.54846 10.8916 8.54338 10.8916 9.77068C10.8916 10.998 11.8865 11.9929 13.1138 11.9929Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>

                <p>About</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
