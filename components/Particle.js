import Particles from 'react-particles-js'
import styled from 'styled-components'

const Particle = ({windowHeight}) => {
    
    return (
        <Particles
            style={{
                position: 'absolute'
            }}
            widht="100%"
            height="560px"
            params={{
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
                particles: {
                    number: {
                        value: 180,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    line_linked: {
                        enable: true,
                        color: '#333',
                        distance: 150,
                        opacity: 0.4,
                        width: 1,
                        // shadow: {
                        //     enable: true,
                        //     color: '#3CA9D1',
                        //     blur: 5,
                        // },
                    },
                    move: {
                        enable: true,
                        direction: 'none',
                        speed: 6,
                    },
                    color: {
                        value: '#333',
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000',
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    opacity: {
                        value: 0.5,
                    },
                },
            }}
        />
    )
}


export default Particle
