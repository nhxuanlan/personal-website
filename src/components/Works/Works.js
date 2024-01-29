import React from "react"
import { Link } from "react-router-dom"
import "./Works.scss"
import BokachaImg from "../../images/BokachaWebsite/Bokacha.png"
import GroceryImg from "../../images/GroceryApp/GroceryApp.png"
import LandingImg from "../../images/LandingPage.png"
import IllustrationImg from "../../images/Illustration.png"
import YoutubeImg from "../../images/Youtube.png"

const Works = () => {
  return (
    <div className="container">
      <div className="works-wrapper">
        <div className="single-work-wrapper">
          <div className="work-text-wrapper">
            <h2 className="work-title">Bokacha Website</h2>
            <div className="work-description">
              My current freelance project at the moment. Aim of the project is
              to create a nice and clean website for a coffee shop in Turku.
              <br />
              Tool: Figma.
            </div>
            <Link to="/works/bokacha-website">
              <div className="work-button">See my work</div>
            </Link>
          </div>
          <div className="work-image-wrapper">
            <img src={BokachaImg} alt="Bokacha project" />
          </div>
        </div>
        <div className="single-work-wrapper">
          <div className="work-text-wrapper">
            <h2 className="work-title">Grocery List App</h2>
            <div className="work-description">
              Grocery List is a mobile application that I created as part of my
              UI design course. As a sole designer, I designed this project from
              ideation to final design.
              <br />
              Tool: Adobe XD.
            </div>
            <Link to="/works/grocery-list-app">
              <div className="work-button">See my work</div>
            </Link>
          </div>
          <div className="work-image-wrapper">
            <img src={GroceryImg} alt="Grocery app" />
          </div>
        </div>
        <div className="single-work-wrapper">
          <div className="work-text-wrapper">
            <h2 className="work-title">Landing Page</h2>
            <div className="work-description">
              A landing page for Grocery List App.
              <br />
              Tool: Figma.
            </div>
          </div>
          <div className="work-image-wrapper">
            <img src={LandingImg} alt="Landing page design" />
          </div>
        </div>
        <div className="single-work-wrapper">
          <div className="work-text-wrapper">
            <h2 className="work-title">Illustration</h2>
            <div className="work-description">
              My illustration work.
              <br />
              Tool: Adobe Illustrator.
            </div>
            <Link to="/works/illustration">
              <div className="work-button">See my work</div>
            </Link>
          </div>
          <div className="work-image-wrapper">
            <img src={IllustrationImg} alt="Illustration drawing" />
          </div>
        </div>
        <div className="single-work-wrapper">
          <div className="work-text-wrapper">
            <h2 className="work-title">My Youtube channel</h2>
            <div className="work-description">
              I started a youtube channel as a hobby. In my spare time, I love
              taking pictures, filming, and creating content. My youtube channel
              is my attempt to combine those hobbies and a place where I keep
              some "aesthetic moments" of my life.
              <br />
              Tools: LumaFusion, Davinci Resolve.
            </div>
            <a
              rel="noreferrer"
              href="https://www.youtube.com/c/byLana"
              target="_blank"
            >
              <div className="work-button">View my Youtube</div>
            </a>
          </div>
          <div className="work-image-wrapper">
            <img src={YoutubeImg} alt="Youtube channel" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
