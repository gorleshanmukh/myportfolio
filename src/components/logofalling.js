import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import {random} from "gsap/gsap-core";
import '../App.css';

let TEXTURES = ['./img.png',
    'img_1.png',
    // 'img_2.svg',
    'img_3.png',
    'img_5.png',
    'img_6.png',
    'img_7.png',
    'img_8.png',
    'img_9.png',
    'img_10.png',
    'img_11.png',
    'img_12.png',
    'img_13.png',
    'img_14.svg',
    './2.svg','./3.svg','./4.svg','./1.svg'];

const addBody = (Bodies, World, engine, Events) => {
    const HEAD = Bodies.rectangle(
        // window.innerWidth,
        Math.random() * window.innerWidth + 500,
        random(1,10) * -100,
        30,
        30,
        {
            angle: Math.random() * 360 * (Math.PI / 180),
            render: {
                sprite: {
                    texture: getTexture(),
                    xScale: 0.21,
                    yScale: 0.21,
                },
            },
            label: "Logo"
        },
    );
    Matter.Body.applyForce(
        HEAD,
        { x: HEAD.position.x, y: HEAD.position.y },
        { x: -0.03, y: 0 }
    );
    World.add(engine.world, HEAD);
}

let bodyCount = 0;
const addBull = (Bodies, World, engine, Events) => {
    const bull = Bodies.rectangle(
        // window.innerWidth,
        window.innerWidth,
        window.innerHeight-300,
        90,
        100,
        {
            angle: -0.04,
            frictionAir: 0.1,
            render: {
                sprite: {
                    texture: './bull.png',
                    xScale: 0.5,
                    yScale: 0.5,
                },
            },
            label: "Bull"
        },
    );
    // Set initial velocity
    Matter.Body.setVelocity(bull, { x: -3, y: 0 });

    // Listen for beforeUpdate event to set velocity every frame
    Events.on(engine, 'beforeUpdate', () => {
        Matter.Body.setVelocity(bull, { x: -3, y: 0 });
    });
    Matter.Body.setInertia(bull, Infinity);
    World.add(engine.world, bull);
}
const getTexture = () => {
    return TEXTURES[Math.floor(Math.random() * TEXTURES.length)];
}
const LogoFalling = () => {
    const canvasRef = useRef(null);
    const { Engine, Render, World, Bodies, MouseConstraint, Mouse, Events } = Matter;
    let engine;
    let height = window.innerHeight - 100;
    useEffect(() => {
        engine = Engine.create();
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: height,
                wireframes: false,
                background: "#181a1b"
            },
        });
        let ang = random(0, 360) * (Math.PI / 180)
        console.log(ang)
        const boundaryOptions = {
            isStatic: true,
            render: {
                fillStyle: "white",
            },
            label: "Surface"
        };
        let trap = Bodies.trapezoid(window.innerWidth , window.innerHeight, 15000, 400, 1, boundaryOptions)

        World.add(engine.world, [trap]);
        Engine.run(engine);
        Render.run(render);
        Events.on(engine, 'collisionStart', (event) => {
            const pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i];
                const bodyA = pair.bodyA;
                const bodyB = pair.bodyB;
                if (bodyB.label === "Bull") {
                    console.log("Bull hit the surface")
                    if (bodyA.label === "Logo") {
                        Matter.Body.setVelocity(bodyA, {x: -30, y: 0});
                    }
                } else if (bodyA.label === "Bull") {
                    console.log("Bull hit the surface")
                    if (bodyB.label === "Logo") {
                        Matter.Body.setVelocity(bodyB, {x: -30, y: 0});
                    }
                }
            }
        });

        let mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
        World.add(engine.world, mouseConstraint);
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

        setInterval(() => {
            addBody(Bodies, World, engine);
            bodyCount++;
            if (bodyCount === 50) {
                bodyCount = 0;
                addBull(Bodies, World, engine, Events);
            }
        }, 1200);
        return () => {
            Engine.clear(engine);
            Render.stop(render);
            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, []);

    const handleClick = () => {
        // a for loop that run 20 times and adds bodies to the world
        addBody(Bodies, World, engine, Events);
    };

    return <div ref={canvasRef} onClick={handleClick} />;
};

export default LogoFalling;
