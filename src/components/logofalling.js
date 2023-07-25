import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import {random} from "gsap/gsap-core";
import '../App.css';

let BODIES_ADD_DELAY = 1400;
let BODIES_CLEANUP_COUNT = 300;
let REMOVE_BULL_INTERVAL = 15000;
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

const isMobile = window.innerWidth <= 768;
const addBody = (Bodies, World, engine, Events) => {
    console.log(window.innerWidth)
    const currentBodyCount = engine.world.bodies.length;
    if (currentBodyCount >= BODIES_CLEANUP_COUNT) {
        const bodiesToRemove = engine.world.bodies.filter(body => body.label === "Logo").slice(0, 50);
        bodiesToRemove.forEach(body => {
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
            });
        });
        setTimeout(() => {
            bodiesToRemove.forEach(body => World.remove(engine.world, body));
        }, 1000);
    }
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
                    xScale: window.innerWidth <= 768 ? 0.11 : 0.21,
                    yScale: window.innerWidth <= 768 ? 0.11 : 0.21,
                },
            },
            label: "Logo"
        },
    );
    Matter.Body.applyForce(
        HEAD,
        { x: HEAD.position.x, y: HEAD.position.y },
        { x: -0.025, y: 0 }
    );
    if (engine.world.bodies.filter(b => b.label === "Bull").length === 0
        && engine.world.bodies.length > BODIES_CLEANUP_COUNT) {
        // addBull(Bodies, World, engine, Events);
    }
    World.add(engine.world, HEAD);
}

const addBull = (Bodies, World, engine, Events) => {
    if (engine.world.bodies.filter(b => b.label === "Bull").length > 0) {
        return;
    }
    const bull = Bodies.rectangle(
        // window.innerWidth,
        window.innerWidth,
        window.innerHeight - 300,
        90,
        100,
        {
            // angle: -0.04,
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
    Matter.Body.setVelocity(bull, {x: -7, y: 0});

    // Listen for beforeUpdate event to set velocity every frame
    Events.on(engine, 'beforeUpdate', () => {
        Matter.Body.setVelocity(bull, {x: -7, y: 0});
    });
    Matter.Body.setInertia(bull, Infinity);
    World.add(engine.world, bull);
    removeBodyAfterInterval(engine.world, bull, REMOVE_BULL_INTERVAL);
}

const removeBodyAfterInterval = (World, body, interval) => {
    setTimeout(() => {
        Matter.World.remove(World, body);
    }, interval);
};
const getTexture = () => {
    return TEXTURES[Math.floor(Math.random() * TEXTURES.length)];
}
const LogoFalling = () => {
    const canvasRef = useRef(null);
    const { Engine, Render, World, Bodies, MouseConstraint, Mouse, Events } = Matter;
    let engine;
    // let height = isMobile ? window.innerHeight-10 : window.innerHeight - 100;
    let height = window.innerHeight - 68;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        let base = Bodies.rectangle(
            window.innerWidth / 2,
            window.innerHeight - 70,
            window.innerWidth + 20,
            140,
            {
                isStatic: true,
                angle: -0.04,
                render: {
                        fillStyle: "white",
                },
                label: "base"
            })
        World.add(engine.world, [base]);
        Engine.run(engine);
        Render.run(render);
        Events.on(engine, 'collisionStart', (event) => {
            const pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i];
                const bodyA = pair.bodyA;
                const bodyB = pair.bodyB;
                // if (bodyA.label === "Logo" && bodyB.label === "Logo"
                //     && engine.world.bodies.filter(b => b.label === "Bull").length > 0) {
                //     Matter.Body.setVelocity(bodyA, {x: -10, y: 0.2});
                //     Matter.Body.setVelocity(bodyB, {x: -10, y: 0.2});
                // }
                if (bodyB.label === "Bull") {
                    if (bodyA.label === "Logo") {
                        Matter.Body.setVelocity(bodyA, {x: -30, y: 0.2});
                    }
                } else if (bodyA.label === "Bull") {
                    if (bodyB.label === "Logo") {
                        Matter.Body.setVelocity(bodyB, {x: -30, y: 0.2});
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
            addBody(Bodies, World, engine, Events);
        }, BODIES_ADD_DELAY);
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
        addBody(Bodies, World, engine, Events);
        // addBull(Bodies, World, engine, Events);
    };
    return <div ref={canvasRef} onClick={handleClick} />;
};

export default LogoFalling;
