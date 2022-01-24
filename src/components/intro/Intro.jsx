import "./Intro.css";
import bg from "../../img/1.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
               <div className="i-left-wrapper">
                   <h2 className="i-intro">Hello, Myyyy name is</h2>
                   <h1 className="i-name">Levan Sardalashvili</h1>
                   <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Front-End Developer</div>
                          <div className="i-title-item">Front-End Developer</div>
                          <div className="i-title-item">Front-End Developer</div>
                          <div className="i-title-item">Front-End Developer</div>
                        </div> 
                     </div>
                     <div className="i-desc">
                     Hello I am Levan, like my work and do everything I can to do
                     my job on the highest level.I think a career in technology is 
                     the best solution and I think that a person can achieve anything he wants.
                     </div>
                   </div> 
                </div> 
            <div className="i-right">
                <div className="i-bg"></div>
               <img src={bg} alt="" className="i-img" />
            </div>
           </div>
    );
};

export default Intro;
