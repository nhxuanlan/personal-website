import React from "react"
import "./Illustration.scss"
import IllustrationBanner from "../../images/IllustrationBanner.png"
import BigLogo from "../../images/BigLogo.png"

const Illustration = () => {
  return (
    <div className="container illustration">
      <div className="project-title">Illustration</div>
      <div className="project-overview mt-100">My 2020</div>
      <div className="project-overview-description mt-50">
        This work is a practice of my Illustrator skill. In my free time, I love
        drawing. This set of illustration describes pretty much my 2020.
      </div>
      <img src={IllustrationBanner} alt="My illustrations" />
      <div className="project-overview mt-100">My own logo</div>

      <div className="project-overview-description mt-50">
        I created a typeface logo for my brand. The idea was that I used my
        initials, letters L and N, and an orange line going through them. The
        orange line and two strokes of the letter N shaped the letter A. As a
        result, the logo contains my initials (L, N), and also includes my first
        name LAN.
      </div>
      <div className="illustration-logo-wrapper">
        <img src={BigLogo} alt="My logo" />
      </div>
    </div>
  )
}

export default Illustration
