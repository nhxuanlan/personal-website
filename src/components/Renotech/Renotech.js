import Renotech1 from "../../images/Renotech/Renotech1.png";
import Renotech2 from "../../images/Renotech/Renotech2.png";
import Renotech3 from "../../images/Renotech/Renotech3.png";
import Renotech4 from "../../images/Renotech/Renotech4.png";
import Renotech5 from "../../images/Renotech/Renotech5.png";
import Renotech6 from "../../images/Renotech/Renotech6.png";
import "./Renotech.scss";

const Renotech = () => {
    return (
        <div className="container illustration">
            <div className="project-title">Renotech</div>
            <div className="project-overview mt-100">Web design/styling</div>
            <div className="project-overview-description mt-50">
                This is my recent project at university. In this project, our team built a new website for Renotech Oy. My responsibility was designing the website layout. The first draft took me two weeks. After several meetings and discussion, I came up with this final design.
            </div>
            <div className="images-wrapper">
                <img src={Renotech1} alt="Renotech design 1" />
                <img src={Renotech2} alt="Renotech design 2" />
                <img src={Renotech3} alt="Renotech design 3" />
                <img src={Renotech4} alt="Renotech design 4" />
                <img src={Renotech5} alt="Renotech design 5" />
                <img src={Renotech6} alt="Renotech design 6" />
            </div>
        </div>
    );
};

export default Renotech;
