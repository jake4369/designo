"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleMainOverflow = () => {
      const mainElement = document.querySelector("html");
      if (mainElement) {
        mainElement.style.overflowY = navOpen ? "hidden" : "auto";
      }
    };

    handleMainOverflow();

    return () => {
      const mainElement = document.querySelector("html");
      if (mainElement) {
        mainElement.style.overflowY = "auto";
      }
    };
  }, [navOpen]);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav>
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          alt="Designo logo"
          width={202}
          height={27}
        />
      </Link>

      {/* DESKTOP NAV */}
      <ul className="desktop-nav__menu">
        <li>
          <Link href="/about">Our company</Link>
        </li>
        <li>
          <Link href="/locations">Locations</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* MOBILE NAV */}
      <div className="mobile-nav__container">
        <button
          className="mobile-nav__menu-btn"
          onClick={handleClick}
          style={{
            width: navOpen ? "20px" : "24px",
            backgroundImage: `url(${
              navOpen
                ? "/assets/shared/mobile/icon-close.svg"
                : "/assets/shared/mobile/icon-hamburger.svg"
            })`,
          }}
        ></button>

        {navOpen && (
          <div className="mobile-nav__dropdown-container">
            <ul className="mobile-nav__dropdown-menu">
              <li>
                <Link href="/about">Our company</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            <div className="mobile-nav__dropdown-filter"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
