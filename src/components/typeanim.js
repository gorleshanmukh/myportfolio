import { TypeAnimation } from 'react-type-animation';
const TypeAnim = () => {
    const isMobile = window.innerWidth <= 768;
    const seq = [
        "a Full Stack Developer",
        1000,
        'an Android Application Developer',
        1000,
        'an Application Developer',
        1000,
        'a Gamer',
        1000,
        () => {
            // console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
    ];
    const seqMob = [
        "A Full Stack Developer",
        1000,
        'An Application Developer',
        1000,
        'A Gamer',
        1000,
        () => {
            // console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
    ];
    return (
        <div className="type-animation-main-container">
            <div>
                <div className="type-animation-static type-animation-head">
                    Hi, I'm Shanmukh <span style={{color:"#3b82f6"}}>&nbsp;Gorle</span>
                </div>
                <div className="type-animation-container">
                    {isMobile ? "" : <span>I'm&nbsp;</span>}
                    <TypeAnimation
                        sequence={window.innerWidth <= 768 ? seqMob : seq}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        className='type-animation'
                    />
                </div>
                <div className="type-animation-description">
                    I am a Java developer with approximately five years of professional experience in crafting web applications for enterprises. I have contributed to various phases of the software development lifecycle, using advanced frameworks, web services, and design patterns within agile methodologies.
                    I have also demonstrated leadership skills by leading a team and serving as a scrum master for a year, ensuring seamless collaboration and efficient project management.
                    Currently, I work as a Senior Software Engineer at Cognizant. 
                    <br /> By the way, this page is under construction.
                </div>
                <div className={"links"}>
                    <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }} target={"_blank"} href={"https://github.com/gorleshanmukh"}> <img width={window.innerWidth <= 768 ? "40px" : "50px"} style={{filter:"invert(1)"}} className={"link-image"} src={"github.png"} alt={"linkedin"} /></a>
                    <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }} target={"_blank"} href={"https://www.linkedin.com/in/gorleshanmukh/"}> <img width={window.innerWidth <= 768 ? "30px" : "35px"} className={"link-image"} src={"linkedin.png"} alt={"linkedin"} /></a>
                </div>
                <div className={"resume-container"}>
                    <a className={"resume-link"} href={"/resume/resume.pdf"} target={"_blank"} >Resume</a>
                </div>
            </div>
        </div>

    );
};
export default TypeAnim;

// 1920×1080 – 21.74%
// 1366×768 – 21.36%
// 1536×864 – 9.4%
// 1440×900 – 7%
// 1280×720 – 5.16%
// 1600×900 – 3.85%
// 1280×800 – 2.63%
