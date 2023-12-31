import React from 'react';
import { Grid } from '@mui/material';
import '../styles/Style.css';
import { Feed } from '@mui/icons-material';
import AboutImage from '../images/image/AboutImage.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-text'>
                <h4 style={{ color: "blue", fontWeight: "800" }}>ABOUT ME</h4>
                <h2 style={{ fontWeight: "800" }}>A dedicated Front-end Developer based in Mumbai 📍</h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <img className='about-img' src={AboutImage} alt="About" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                </Grid>
                <p className='about-text' style={{ fontWeight: "500", color: "gray" }}>
                    I am a passionate and driven individual with a strong interest in web development and building dynamic and engaging user interfaces using the React JavaScript Library. I have completed relevant coursework or have prior experience in web development and programming languages such as HTML, CSS, and JavaScript.
                    <br />
                    <br />
                    Currently, I'm working with Techstalwarts Software Development LLP, Mumbai, as a Software Engineer Associate, working on real-world projects and learning from experienced developers. I am eager to continue developing my skills and building my career as a React Developer.
                </p>
                <div>
                    <a href='https://www.dropbox.com/s/2s2mmsqd7lqkc7c/Siddharth%27s%20Resume.pdf?dl=0' className='social'>
                        <Feed style={{ fontSize: "35px" }} className='resume-icon' />
                        <span style={{ fontWeight: "800", margin: "0 5px", textAlign: "center" }} className='social-text'>View Resume</span>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default About;
