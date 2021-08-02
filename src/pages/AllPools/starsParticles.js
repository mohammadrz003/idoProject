import Particles from "react-particles-js";

import React from 'react';

const StarsParticles = () => {
    return (
        <>
            <Particles
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: false,
                            opacity: 0.02,
                        },
                        move: {
                            direction: "left",
                            speed: 0.2,
                            out_mode: "out"
                        },
                        size: {
                            value: 1.7,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },

                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: false,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}

            />
        </>
    );
};

export default StarsParticles;