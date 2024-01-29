import React, { useState } from "react"
import "./style.scss"
import logo from "../../images/LanLogo.png"
import { NavLink, Link } from "react-router-dom"

const Header = ({ allRefs }) => {
  const handleNavClick = (ele, mobile) => {
    //Subtract the height of sticky header
    const position =
      ele.current.getBoundingClientRect().top + window.pageYOffset
    //Smooth scroll to element position with offset
    if (mobile) setOpenMenu(!openMenu)
    window.scrollTo({
      behavior: "smooth",
      top: position,
    })
  }

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <div className="left-nav">
        <div className="left-nav__mobile-menu">
          <div
            className={openMenu ? "close menu-btn" : "menu-btn"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
        </div>
        <div className="left-nav__social">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nhxlan/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/nhxuanlan"
              >
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/byLana"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <a
          href="mailto:nhxuanlan@gmail.com"
          className="left-nav__contact-wrapper"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <div className="header">
        <nav className={openMenu ? "show menu" : "menu"}>
          <div className={openMenu ? "show menu-branding" : "menu-branding"}>
            <div className="portrait"></div>
          </div>
          <ul className={openMenu ? "show menu-nav" : "menu-nav"}>
            <li className={`${openMenu ? "show nav-item" : "nav-item"}`}>
              <div className="nav-link">Works</div>
            </li>
            <li className={`${openMenu ? "show nav-item" : "nav-item"}`}>
              <div className="nav-link">About me</div>
            </li>
          </ul>
        </nav>
        <div className="header__main-nav">
          <Link to="/works">
            <div className="logo-wrapper">
              <img src={logo} alt="Logo" />
              <span>Lan nguyen</span>
            </div>
          </Link>

          <div className="main-nav-item-wrapper">
            <NavLink to="/works" activeClassName="nav-selected">
              <div>Works</div>
            </NavLink>

            <NavLink to="/about-me" activeClassName="nav-selected">
              <div>About me</div>
            </NavLink>
          </div>
        </div>
        <div className="header__right-nav">
          {/* <ul>
            <li>
              <div
                className={`${isHeaderVisible ? "selected" : ""}`}
                onClick={() => handleNavClick(headerRef)}
              >
                info
              </div>
            </li>
            <li>
              <div
                className={`${
                  isAboutVisible && !isHeaderVisible ? "selected" : ""
                }`}
                onClick={() => handleNavClick(aboutRef)}
              >
                experience
              </div>
            </li>
            <li>
              <div
                className={`${
                  isSkillsVisible && !isAboutVisible ? "selected" : ""
                }`}
                onClick={() => handleNavClick(skillsRef)}
              >
                education
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}
export default Header
