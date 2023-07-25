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
        {"image": "android.svg", "name": "Android", "rating":"1"},
        {"image": "arduino.svg", "name": "Arduino", "rating":"2"},
        {"image": "bitbucket.svg", "name": "Bitbucket", "rating":"3"},
        {"image": "docker.svg", "name": "Docker", "rating":"4"},
        {"image": "git.svg", "name": "Git", "rating":"5"},
        {"image": "graphql.svg", "name": "GraphQL", "rating":"5"},
        {"image": "javascript.svg", "name": "JavaScript", "rating":"5"},
        {"image": "mongodb.svg", "name": "MongoDB", "rating":"5"},
        {"image": "npm.svg", "name": "npm", "rating":"5"},
        {"image": "react.svg", "name": "React", "rating":"5"},
        {"image": "terraform.svg", "name": "Terraform", "rating":"5"},
        {"image": "angularjs.svg", "name": "AngularJS", "rating":"5"},
        {"image": "aws.svg", "name": "AWS", "rating":"5"},
        {"image": "bootstrap.svg", "name": "Bootstrap", "rating":"5"},
        {"image": "express.svg", "name": "Express", "rating":"5"},
        {"image": "github.svg", "name": "GitHub", "rating":"5"},
        {"image": "html5.svg", "name": "HTML5", "rating":"5"},
        {"image": "jenkins.svg", "name": "Jenkins", "rating":"5"},
        {"image": "mysql.svg", "name": "MySQL", "rating":"5"},
        {"image": "php.svg", "name": "PHP", "rating":"5"},
        {"image": "redux.svg", "name": "Redux", "rating":"5"},
        {"image": "tomcat.svg", "name": "Tomcat", "rating":"5"},
        {"image": "apache.svg", "name": "Apache", "rating":"5"},
        {"image": "azure.svg", "name": "Azure", "rating":"5"},
        {"image": "c.svg", "name": "C", "rating":"5"},
        {"image": "firebase.svg", "name": "Firebase", "rating":"5"},
        {"image": "gitlab.svg", "name": "GitLab", "rating":"5"},
        {"image": "java.svg", "name": "Java", "rating":"0"},
        {"image": "jquery.svg", "name": "jQuery", "rating":"5"},
        {"image": "nodejs.svg", "name": "NodeJS", "rating":"5"},
        {"image": "postgresql.svg", "name": "PostgreSQL", "rating":"5"},
        {"image": "spring.svg", "name": "Spring", "rating":"5"},
        {"image": "typescript.svg", "name": "TypeScript","rating":"5"}
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
