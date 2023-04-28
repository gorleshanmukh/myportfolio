import React, { useRef, useEffect } from 'react';
import Matter, { Svg } from 'matter-js';
import {random} from "gsap/gsap-core";
import '../App.css';

//write a function that returns randon value from 0 to 3
// const ORIGINAL_SIZE = 76
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
const ORIGINAL_SIZE = 90
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
            angle: 3.081288909939511,
            // angle: 2.9722075770191174,
            // angle: ang,
            render: {
                fillStyle: "red",
                strokeStyle: "red"
            }
        };
        const boundaryOptions1 = {
            isStatic: true,
            // angle: random(0, 360) * (Math.PI / 180),
            render: {
                fillStyle: "white",
            }
        };
        const ground = Bodies.rectangle(0, window.innerHeight, 1300, 4);
        const leftWall = Bodies.rectangle(0, 360, 4, 740, boundaryOptions);
        // const rightWall = Bodies.rectangle(0, window.innerHeight-30, window.innerWidth*3, 3, boundaryOptions);
        let trap = Bodies.trapezoid(window.innerWidth , window.innerHeight, 15000, 400, 1, boundaryOptions1)

        // const box = Bodies.rectangle(400, 200, 80, 80);
        // const circle = Bodies.circle(200, 100, 40);
        World.add(engine.world, [trap]);
        Engine.run(engine);
        Render.run(render);
        // Add collision event listener to the engine
        Events.on(engine, 'collisionStart', (event) => {
            const pairs = event.pairs;

            // Iterate through the collision pairs
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i];
                const bodyA = pair.bodyA;
                const bodyB = pair.bodyB;

                // Set restitution and friction properties of colliding bodies
                bodyA.restitution = 0.7;
                bodyB.restitution = 0.7;
                bodyA.friction = 0.5;
                bodyB.friction = 0.5;
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
            handleClick();
        }, 1500);
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
        const SIZE = random(30, 50)
        const HEAD = Bodies.rectangle(
            Math.random() * window.innerWidth,
            random(1,10) * -100,
            // SIZE,
            // SIZE,
            30,
            30,
            {
                angle: Math.random() * 360 * (Math.PI / 180),
                collisionFilter: {
                    category: 0x0001, // set a category that is different from other bodies
                },
                render: {
                    sprite: {
                        texture: getTexture(),
                        // xScale: SIZE / ORIGINAL_SIZE,
                        // yScale: SIZE / ORIGINAL_SIZE,
                        xScale: 0.2, // set the x scale of the texture
                        yScale: 0.2, // set the y scale of the texture
                    },
                },
            }
        );
        Matter.Body.applyForce(
            HEAD,
            { x: HEAD.position.x, y: HEAD.position.y },
            { x: -0.03, y: 0 }
        );
        World.add(engine.world, HEAD);
    };

    return <div ref={canvasRef} onClick={handleClick} />;
};

export default LogoFalling;
