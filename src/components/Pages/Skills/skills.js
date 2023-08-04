import React, { useRef, useEffect } from 'react';
import Matter, { Svg } from 'matter-js';
import {random} from "gsap/gsap-core";
import '../../../App.css';
import './skills.css';

const Skills = () => {
    const getRating = (rating) => {
        if (rating === "5") {
            return "five-stars";
        } else if (rating === "4") {
            return "four-stars";
        } else if (rating === "3") {
            return "three-stars";
        } else if (rating === "2") {
            return "two-stars";
        } else if (rating === "1") {
            return "one-star";
        } else
            return "king-star"
    }
    const techs = [
        {"image": "java.svg", "name": "Java", "rating":"0"},
        {"image": "android.svg", "name": "Android", "rating":"4"},
        {"image": "arduino.svg", "name": "Arduino", "rating":"3"},
        {"image": "spring.svg", "name": "Spring", "rating":"4"},
        {"image": "bitbucket.svg", "name": "Bitbucket", "rating":"4"},
        {"image": "git.svg", "name": "Git", "rating":"5"},
        {"image": "javascript.svg", "name": "JavaScript", "rating":"4"},
        {"image": "typescript.svg", "name": "TypeScript","rating":"4"},
        {"image": "npm.svg", "name": "npm", "rating":"4"},
        {"image": "express.svg", "name": "Express", "rating":"4"},
        {"image": "nodejs.svg", "name": "NodeJS", "rating":"4"},
        {"image": "react.svg", "name": "React", "rating":"4"},
        {"image": "redux.svg", "name": "Redux", "rating":"4"},
        {"image": "angularjs.svg", "name": "AngularJS", "rating":"4"},
        {"image": "aws.svg", "name": "AWS", "rating":"4"},
        {"image": "bootstrap.svg", "name": "Bootstrap", "rating":"5"},
        {"image": "github.svg", "name": "GitHub", "rating":"4"},
        {"image": "html5.svg", "name": "HTML5", "rating":"4"},
        {"image": "jenkins.svg", "name": "Jenkins", "rating":"2"},
        {"image": "mysql.svg", "name": "MySQL", "rating":"4"},
        {"image": "tomcat.svg", "name": "Tomcat", "rating":"4"},
        {"image": "apache.svg", "name": "Apache", "rating":"4"},
        {"image": "azure.svg", "name": "Azure", "rating":"4"},
        {"image": "c.svg", "name": "C", "rating":"4"},
        {"image": "firebase.svg", "name": "Firebase", "rating":"3"},
        {"image": "gitlab.svg", "name": "GitLab", "rating":"4"},
        {"image": "jquery.svg", "name": "jQuery", "rating":"4"},
        {"image": "postgresql.svg", "name": "PostgreSQL", "rating":"4"},
        {"image": "graphql.svg", "name": "GraphQL", "rating":"3"},
        {"image": "terraform.svg", "name": "Terraform", "rating":"3"},
        {"image": "php.svg", "name": "PHP", "rating":"2"},
        {"image": "docker.svg", "name": "Docker", "rating":"3"},
        {"image": "mongodb.svg", "name": "MongoDB", "rating":"4"},
    ];


    let skills = techs.map((tech) => {
        return (
            <div className={"tech-card " + getRating(tech.rating)}>
                <div className={"tech-image-container"}>
                    <img
                    className={"tech-image"}
                    src={'skills/'+tech.image}/></div>
                <div className={"tech-text"}>{tech.name}</div>
            </div>
        );
    });
    let skills1 = techs.map((tech) => {
        return (
            <div className={"tech-card " + getRating(tech.rating)}>
                <div className={"tech-image-container"}>
                    <img
                        className={"tech-image"}
                        src={'skills/'+tech.image}/></div>
                <div className={"tech-text"}>{tech.name}</div>
            </div>
        );
    });
    return (<section id={"skills"}>
        <div className={"section-container skills-container"}>
            <h1 className={"section-heading"} >Technologies</h1>
            <div className={"tech-card-container"}>
                {/*{skills}*/}
                {skills1}
            </div>
        </div>
    </section>);
};

export default Skills;
