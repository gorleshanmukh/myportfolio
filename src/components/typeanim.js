import { TypeAnimation } from 'react-type-animation';

const TypeAnim = () => {
    return (
        <div className="type-animation-main-container">
            <div className="type-animation-static type-animation-head">
                Hi, I'm Shanmukh <span style={{color:"#3b82f6"}}>&nbsp;Gorle</span>
            </div>
            <div className="type-animation-container">
                <span>I'm&nbsp;</span>
                <TypeAnimation
                    sequence={[
                        "a Full Stack Developer",
                        1000,
                        'an Android Application Developer',
                        1000,
                        'an Application Developer',
                        1000,
                        'a Gamer',
                        1000,
                        () => {
                            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    className='type-animation'
                />
            </div>
            <div className="type-animation-description">
                I am a graduate student pursuing a Master's degree in Computer Science at the University of North Carolina at Charlotte.
                Currently, I am working as a Java Application Developer at the North Carolina Research Center.
                From web applications to mobile apps, I have worked on a variety of projects that
                demonstrate my ability to build scalable, maintainable, and user-friendly applications. By the way, this page is still under construction.
            </div>
            <div className={"links"}>
               <a target={"_blank"} href={"https://www.linkedin.com/in/gorleshanmukh/"}> <img width="40px" className={"link-image"} src={"linkedin.png"} alt={"linkedin"} /></a>
               <a target={"_blank"} href={"https://github.com/gorleshanmukh"}> <img width="55px" style={{filter:"invert(1)"}} className={"link-image"} src={"github.png"} alt={"linkedin"} /></a>
            </div>
            <div className={"resume-container"}>
                <a className={"resume-link"} href={"/resume/resume.pdf"} target={"_blank"} >Resume</a>
            </div>
            </div>

    );
};
export default TypeAnim;
