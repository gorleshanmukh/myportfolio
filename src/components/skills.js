import React, { useRef, useEffect } from 'react';
import Matter, { Svg } from 'matter-js';
import {random} from "gsap/gsap-core";
import '../App.css';

const Skills = () => {

    const techs = [
        {"image": "img_1.png", "name": "TypeScript"},
        {"image": "img_2.svg", "name": "AWS"},
        {"image": "img_3.png", "name": "Node.js"},
        {"image": "img_5.png", "name": "React.js"},
        {"image": "img_6.png", "name": "PostgreSQL"},
        {"image": "img_7.png", "name": "Python"},
        {"image": "img_8.png", "name": "Java"},
        {"image": "img_9.png", "name": "C++"},
        {"image": "img_10.png", "name": "C"},
        {"image": "img_11.png", "name": "C#"},
        {"image": "img_12.png", "name": "HTML"},
        {"image": "img_13.png", "name": "CSS"},
        {"image": "img_14.svg", "name": "JavaScript"},
        {"image": "img_15.png", "name": "Git"},
        {"image": "img_16.png", "name": "GitHub"}
    ];

    let skills = techs.map((tech) => {
        return (
            <div className={"tech-card"}>
                <div className={"tech-image-container"}>
                    <img
                    className={"tech-image"}
                    src={tech.image}/></div>
                <div className={"tech-text"}>{tech.name}</div>
            </div>
        );
    });
    return (<section id={"skills"}>
        <div className={"section-container skills-container"}>
            <h1>Skills</h1>
            <div className={"tech-card-container"}>
                {skills}
            </div>
        </div>
    </section>);
};

export default Skills;
