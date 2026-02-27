"use client";
import React, { useState, useEffect, useRef } from "react";

interface NavbarProps {
  route: string;
  scrollThreshold: number;
}

const Navbar: React.FC<NavbarProps> = ({ route, scrollThreshold }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (r: string) => route === r;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 48px;
          transition: background-color 0.35s ease-in-out, box-shadow 0.35s ease-in-out;
          background-color: transparent;
          font-family: 'DM Sans', sans-serif;
        }

        .navbar.scrolled {
          background-color: #1a1714;
          box-shadow: 0 1px 0 rgba(196, 168, 130, 0.15);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .navbar-link {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          color: #c8bfb3;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }

        .navbar.scrolled .navbar-link {
          color: #c8bfb3;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c4a882;
          transition: width 0.25s ease;
        }

        .navbar-link:hover::after,
        .navbar-link.active::after {
          width: 100%;
        }

        .navbar-link:hover {
          color: #c4a882;
        }

        .navbar.scrolled .navbar-link:hover {
          color: #c4a882;
        }

        .navbar-link.active {
          color: #c4a882;
        }

        .navbar.scrolled .navbar-link.active {
          color: #c4a882;
        }

        /* Dropdown */
        .navbar-dropdown {
          position: relative;
        }

        .navbar-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          color: #c8bfb3;
          padding: 0 0 2px;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .navbar.scrolled .navbar-dropdown-trigger {
          color: #c8bfb3;
        }

        .navbar-dropdown-trigger::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c4a882;
          transition: width 0.25s ease;
        }

        .navbar-dropdown-trigger:hover::after,
        .navbar-dropdown-trigger.active::after {
          width: 100%;
        }

        .navbar-dropdown-trigger:hover,
        .navbar-dropdown-trigger.active {
          color: #c4a882;
        }

        .navbar.scrolled .navbar-dropdown-trigger:hover,
        .navbar.scrolled .navbar-dropdown-trigger.active {
          color: #c4a882;
        }

        .navbar-dropdown-arrow {
          width: 10px;
          height: 10px;
          transition: transform 0.2s ease;
          opacity: 0.7;
        }

        .navbar-dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .navbar-dropdown-menu {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          background: #1a1714;
          border: 1px solid rgba(196, 168, 130, 0.2);
          min-width: 200px;
          padding: 8px 0;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .navbar-dropdown-menu.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .navbar-dropdown-item {
          display: block;
          padding: 10px 20px;
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: #9c8e7e;
          transition: color 0.2s, background-color 0.2s;
          white-space: nowrap;
        }

        .navbar-dropdown-item:hover {
          color: #c4a882;
          background-color: rgba(196, 168, 130, 0.06);
        }

        @media (max-width: 640px) {
          .navbar {
            padding: 0 24px;
          }
          .navbar-links {
            gap: 20px;
          }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-links">
          <a href="/" className={`navbar-link${isActive("home") ? " active" : ""}`}>
            Home
          </a>
          <a href="/data-critique" className={`navbar-link${isActive("data") ? " active" : ""}`}>
            Data Critique
          </a>

          <div className="navbar-dropdown" ref={menuRef}>
            <button
              className={`navbar-dropdown-trigger${isActive("narrative_1") ? " active" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              Narrative
              <svg
                className={`navbar-dropdown-arrow${menuOpen ? " open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className={`navbar-dropdown-menu${menuOpen ? " open" : ""}`} role="menu">
              <a href="narrative_1" className="navbar-dropdown-item" onClick={() => setMenuOpen(false)}>
                Research Question 1
              </a>
              <a href="narrative_2" className="navbar-dropdown-item" onClick={() => setMenuOpen(false)}>
                Research Question 2
              </a>
              <a href="narrative_3" className="navbar-dropdown-item" onClick={() => setMenuOpen(false)}>
                Research Question 3
              </a>
            </div>
          </div>

          <a href="/sources" className={`navbar-link${isActive("sources") ? " active" : ""}`}>
            Sources
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;