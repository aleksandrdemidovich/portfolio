import {ISourceOptions} from "tsparticles";

export const  particleOpt: ISourceOptions ={
    background: {
        color: {
            value: 'inherit',
        },
    },
    fullScreen:{
        enable: true,
        zIndex: -1
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.8,
            },
        },
    },
    particles: {
        color: {
            value: "#90caf9",
        },
        links: {
            color: "#90caf9",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: false,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}