import React from 'react';
import '../styles/Style.css';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Grid } from '@mui/material';


const Hero = () => {
    return (
        <div className='container'>
            <Grid container spacing={4}>
                <Grid item md={6} xs={110}>
                    <div className='hero'>
                        <section className='text-section'>
                            <h1 className='hero-text' style={{ fontWeight: "800" }}>
                                Front-End React Developer
                                <img className='wave-img' src='https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png' />
                            </h1>
                            <p >Hi, I'm Siddharth, a passionate Front-end React Developer based in Mumbai 📍</p>
                            <div className='link-icon'>
                                <a href='https://www.linkedin.com/in/siddharth-rupwate' className='social'>
                                    <LinkedIn className='social-icon' />
                                </a>
                                <a href='https://github.com/sidrupwate' className='social'>
                                    <GitHub className='social-icon' />
                                </a>
                            </div>
                        </section>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className='hero'>
                        <section className='image-section'>
                            <img className='hero-img' src='https://nsy.co.in/images/dev.gif' />
                        </section>
                    </div>
                </Grid>
            </Grid>
            <div className='tech-section'>
                <div>
                    <h5 className='tech-text' style={{ fontWeight: "700", marginTop: "10px" }}>Tech Stack</h5>
                </div>
                <div style={{ fontWeight: "700", marginTop: "10px" }} className='dash'>
                    |
                </div>
                <div className='tech-skill'>
                    <div>
                        <img className='tech-image' src='https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg' />
                    </div>
                    <div>
                        <img className='tech-image' src='https://cdn.worldvectorlogo.com/logos/redux.svg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
