import "./About.css";
import edu from "../../img/2.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={edu} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Education</h1>
                <p className="a-desc">
                I graduated from school in 2018 and entered the Georgian Technical University,
                Faculty of Informatics and Management Systems, majoring in Software Engineering.
                In 2019, I became interested in web technologies and started learning basic skills,
                I realized that I had to do this job and I try to learn every day.
                </p>
            </div>
        </div>
    );
};

export default About;
