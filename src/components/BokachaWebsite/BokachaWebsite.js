import React from "react"
import "./BokachaWebsite.scss"
import BokachaBanner from "../../images/BokachaWebsite/BokachaBanner.png"
import BokachaBrainstorm from "../../images/BokachaWebsite/BokachaBrainstorm.png"
import BokachaWireframe from "../../images/BokachaWebsite/BokachaWireframe.png"
import BokachaWholeSite from "../../images/BokachaWebsite/BokachaWholeSite.png"

const BokachaWebsite = () => {
  return (
    <div className="container bokacha-website">
      <div className="project-title">Bokacha Website</div>
      <div className="project-overview-description text-center">
        Bokacha is a coffee shop, located in Turku, Finland. Bokacha needs a
        website to achieve particular goals of business branding.
      </div>
      <div className="text-wrap-80">
        <img
          className="banner-image"
          src={BokachaBanner}
          alt="Bokacha banner"
        />
      </div>
      <div className="project-overview mt-50">Overview</div>
      <div className="project-overview-description">
        The website allows the coffee shop to advertise their business online,
        provide information such as the address, menu, opening hours, update
        latest offers, products to customers and receive feedback from
        customers. In this project, I use Figma as a design tool to create the
        website design.
      </div>
      <div className="project-overview-description">
        The process includes: brainstorming ideas, sketching out low-fidelity,
        developing high-fidelity wireframe, prototyping.
      </div>
      <div className="project-overview mt-50">Brainstorming ideas</div>
      <div className="project-overview-description">
        As I brainstormed with the customer, I created a quickly draw of the
        requirements and list of components.
      </div>
      <img src={BokachaBrainstorm} alt="Bokacha brainstorm process" />
      <div className="project-overview mt-50">Low-fidelity Wireframe</div>
      <div className="project-overview-description">
        The next step was wireframing . The purpose of wireframing was to
        organise the content structure and the flow of the web page. After
        gathering information, the wireframe of the website is sketched. The
        wireframe focuses on:
        <br />
        • Arrangement of the website’s content
        <br />
        • Functionalities of the website
        <br />
        • Information hierarchy
        <br />
      </div>
      <img src={BokachaWireframe} alt="Bokacha brainstorm process" />
      <div className="project-overview mt-50">High-fidelity Design</div>
      <div className="project-overview-description">
        The visual design is created according to the wireframe and following
        the color scheme. The website color scheme is chosen based on the color
        theme of Bokacha coffee shop. They are analogous colors on the color
        wheel. This combination makes a monochromatic look as well as a
        harmonious feel for the website. In this step, every element such as
        logo, navigation item, header, button is illustrated in detail. Since
        the content structure was arranged in the wireframing step, the task
        basically is putting text and placing images into the design.
        <br />
        <br />
        The outcome of the project was an single page website that fulfills all
        expectations of Bokacha coffee shop.
      </div>
      <img src={BokachaWholeSite} alt="Bokacha brainstorm process" />
    </div>
  )
}

export default BokachaWebsite
